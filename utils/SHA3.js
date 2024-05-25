class Sha3 {
    static hash224(message, options) {
        return Sha3.keccak1600(1152, 448, message, options);
    }

    static hash256(message, options) {
        return Sha3.keccak1600(1088, 512, message, options);
    }

    static hash384(message, options) {
        return Sha3.keccak1600(832, 768, message, options);
    }

    static hash512(message, options) {
        return Sha3.keccak1600(576, 1024, message, options);
    }

    static keccak1600(r, c, M, options) {
        const defaults = { padding: 'sha-3', msgFormat: 'string', outFormat: 'hex' };
        const opt = Object.assign(defaults, options);
        const l = c / 2;

        let msg = opt.msgFormat === 'hex-bytes' ? hexBytesToString(M) : utf8Encode(M);
        const state = Array.from({ length: 5 }, () => Array(5).fill(0n));

        const q = (r / 8) - msg.length % (r / 8);
        msg += String.fromCharCode(opt.padding == 'keccak' ? (q == 1 ? 0x81 : 0x01) : (q == 1 ? 0x86 : 0x06)) +
               (q > 1 ? String.fromCharCode(0x00).repeat(q - 2) + String.fromCharCode(0x80) : '');

        const blocksize = r / 8;
        for (let i = 0; i < msg.length; i += blocksize) {
            for (let j = 0; j < r / 64; j++) {
                const i64 = BigInt(msg.charCodeAt(i + j * 8 + 0)) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 1)) << 8n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 2)) << 16n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 3)) << 24n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 4)) << 32n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 5)) << 40n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 6)) << 48n) |
                           (BigInt(msg.charCodeAt(i + j * 8 + 7)) << 56n);
                const x = j % 5;
                const y = Math.floor(j / 5);
                state[x][y] ^= i64;
            }
            Sha3.keccak_f_1600(state);
        }

        let md = transpose(state)
            .map(plane => plane.map(lane => lane.toString(16).padStart(16, '0').match(/.{2}/g).reverse().join('')).join(''))
            .join('')
            .slice(0, l / 4);

        if (opt.outFormat == 'hex-b') md = md.match(/.{2}/g).join(' ');
        if (opt.outFormat == 'hex-w') md = md.match(/.{8,16}/g).join(' ');

        return md;

        function transpose(array) {
            return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
        }

        function utf8Encode(str) {
            try {
                return new TextEncoder().encode(str).reduce((prev, curr) => prev + String.fromCharCode(curr), '');
            } catch (e) {
                return unescape(encodeURIComponent(str));
            }
        }

        function hexBytesToString(hexStr) {
            return hexStr.replace(/ /g, '').match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        }
    }

    static keccak_f_1600(a) {
        const RC = [
            0x0000000000000001n, 0x0000000000008082n, 0x800000000000808an,
            0x8000000080008000n, 0x000000000000808bn, 0x0000000080000001n,
            0x8000000080008081n, 0x8000000000008009n, 0x000000000000008an,
            0x0000000000000088n, 0x0000000080008009n, 0x000000008000000an,
            0x000000008000808bn, 0x800000000000008bn, 0x8000000000008089n,
            0x8000000000008003n, 0x8000000000008002n, 0x8000000000000080n,
            0x000000000000800an, 0x800000008000000an, 0x8000000080008081n,
            0x8000000000008080n, 0x0000000080000001n, 0x8000000080008008n,
        ];

        for (let r = 0; r < 24; r++) {
            const C = [], D = [];
            for (let x = 0; x < 5; x++) {
                C[x] = a[x][0];
                for (let y = 1; y < 5; y++) C[x] ^= a[x][y];
            }
            for (let x = 0; x < 5; x++) {
                D[x] = C[(x + 4) % 5] ^ ROT(C[(x + 1) % 5], 1);
                for (let y = 0; y < 5; y++) a[x][y] ^= D[x];
            }

            let [x, y] = [1, 0];
            let current = a[x][y];
            for (let t = 0; t < 24; t++) {
                const [X, Y] = [y, (2 * x + 3 * y) % 5];
                const tmp = a[X][Y];
                a[X][Y] = ROT(current, ((t + 1) * (t + 2) / 2) % 64);
                current = tmp;
                [x, y] = [X, Y];
            }

            for (let y = 0; y < 5; y++) {
                const C = Array.from(a.map(row => row[y]));
                for (let x = 0; x < 5; x++) a[x][y] = C[x] ^ (~C[(x + 1) % 5] & C[(x + 2) % 5]);
            }

            a[0][0] ^= RC[r];
        }

        function ROT(a, d) {
            return BigInt.asUintN(64, (a << BigInt(d)) | (a >> BigInt(64 - d)));
        }
    }
}

export default Sha3;
