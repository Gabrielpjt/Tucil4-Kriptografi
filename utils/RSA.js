class RSA {
    #n_symbol;

    constructor(p, q) {
        this.p = p;
        this.q = q;
        this.n = BigInt(p * q);
        this.#n_symbol = (p - 1) * (q - 1);
    }

    static generatePAndQ() {
        let p = Math.floor(Math.random() * 100);
        while (p < 10 || !isPrime(p)) {
            p = Math.floor(Math.random() * 100);
        }
        let q = Math.floor(Math.random() * 100);
        while (q < 10 || !isPrime(q) || q === p) {
            q = Math.floor(Math.random() * 100);
        }
        return { p, q };
    }

    #generateE() {
        let e = Math.floor(Math.random() * 100);
        let repeat = true;
        while (repeat) {
            if (e > 1 && isCoprime(e, this.#n_symbol)) {
                repeat = false;
            } else {
                e = Math.floor(Math.random() * 100);
            }
        }
        this.e = BigInt(e);
    }

    #generateD() {
        let k = 1;
        let d = (1 + k * this.#n_symbol) / Number(this.e);
        while (!Number.isInteger(d)) {
            k++;
            d = (1 + k * this.#n_symbol) / Number(this.e);
        }
        this.d = BigInt(d);
    }

    getPublicKey() {
        if (!this.e) this.#generateE();
        return { e: this.e, n: this.n };
    }

    getPrivateKey() {
        if (!this.d) this.#generateD();
        return { d: this.d, n: this.n };
    }

    #bytesToBase64(bytes) {
        const binString = Array.from(bytes, (byte) =>
            String.fromCodePoint(byte)
        ).join('');
        return btoa(binString);
    }

    #base64ToBytes(base64) {
        const binString = atob(base64);
        return Uint8Array.from(binString, (m) => m.codePointAt(0));
    }

    doEncryption(plaintext) {
        let input = plaintext.split('').map((char) => BigInt(char.charCodeAt(0)));
        const cipherArr = input.map((char) => char ** this.d % this.n); // Menggunakan kunci privat d
        const ciphertext = String.fromCharCode(
            ...cipherArr.map((cipher) => Number(cipher))
        );
        return this.#bytesToBase64(new TextEncoder().encode(ciphertext));
    }

    doDecryption(ciphertext) {
        let input = new TextDecoder().decode(this.#base64ToBytes(ciphertext));
        input = input.split('').map((char) => BigInt(char.charCodeAt(0)));
        const plainArr = input.map((char) => char ** this.e % this.n);
        const plaintext = String.fromCharCode(
            ...plainArr.map((plain) => Number(plain))
        );
        return plaintext;
    }

    doEncryptionwithKey(plaintext, privateKey) {
        const { d, n } = privateKey;
        let input = plaintext.split('').map((char) => BigInt(char.charCodeAt(0)));
        const cipherArr = input.map((char) => char ** d % n); // Menggunakan kunci privat d
        const ciphertext = String.fromCharCode(
            ...cipherArr.map((cipher) => Number(cipher))
        );
        return this.#bytesToBase64(new TextEncoder().encode(ciphertext));
    }

    doDecryptionwithKey(ciphertext, publicKey) {
        const { e, n } = publicKey;
        let input = new TextDecoder().decode(this.#base64ToBytes(ciphertext));
        input = input.split('').map((char) => BigInt(char.charCodeAt(0)));
        const plainArr = input.map((char) => char ** e % n);
        const plaintext = String.fromCharCode(
            ...plainArr.map((plain) => Number(plain))
        );
        return plaintext;
    }

    static async generateAndSaveKeys(p, q, publicKeyFilename, privateKeyFilename) {
        // Send keys to API route to save to files
        await fetch('/api/saveKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ p, q, publicKeyFilename, privateKeyFilename })
        });
    }
}

// Fungsi untuk mengecek bilangan prima
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Fungsi untuk mengecek coprime
function isCoprime(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a === 1;
}

export default RSA;
