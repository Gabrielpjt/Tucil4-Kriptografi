const generateRC4Key = (key) => {
	const keyArray = [];
	for (let i = 0; i < 256; i++) {
		keyArray[i] = key.charCodeAt(i % key.length);
	}
	return keyArray;
};

const encryptRC4 = (text, key) => {
	let keyArray = generateRC4Key(key);
	let result = '';
	let j = 0;

	let sbox = [];
	for (let i = 0; i < 256; i++) {
		sbox[i] = i;
	}

	for (let i = 0; i < 256; i++) {
		j = (j + sbox[i] + keyArray[i % keyArray.length]) % 256;
		let temp = sbox[i];
		sbox[i] = sbox[j];
		sbox[j] = temp;
	}

	let i = 0;
	j = 0;
	for (let idx = 0; idx < text.length; idx++) {
		i = (i + 1) % 256;
		j = (j + sbox[i]) % 256;
		let temp = sbox[i];
		sbox[i] = sbox[j];
		sbox[j] = temp;
		let k = sbox[(sbox[i] + sbox[j]) % 256];
		result += String.fromCharCode(text.charCodeAt(idx) ^ k);
	}
	return result;
};

const encryptVigenere = (text, keyword) => {
	let encryptedText = '';
	for (let i = 0; i < text.length; i++) {
		const keyIndex = i % keyword.length;
		const keyChar = keyword.charCodeAt(keyIndex) - 32;
		const textChar = text.charCodeAt(i) + keyChar;
		encryptedText += String.fromCharCode(textChar);
	}
	return encryptedText;
};

const encryptModifiedRC4 = (inputText, keyword) => {
	const rc4Encrypted = encryptRC4(inputText, keyword);
	const finalEncrypted = encryptVigenere(rc4Encrypted, keyword);
	return finalEncrypted;
};

const decryptRC4 = (text, key) => {
	let keyArray = generateRC4Key(key);
	let result = '';
	let j = 0;

	let sbox = [];
	for (let i = 0; i < 256; i++) {
		sbox[i] = i;
	}

	for (let i = 0; i < 256; i++) {
		j = (j + sbox[i] + keyArray[i % keyArray.length]) % 256;
		let temp = sbox[i];
		sbox[i] = sbox[j];
		sbox[j] = temp;
	}

	let i = 0;
	j = 0;
	for (let idx = 0; idx < text.length; idx++) {
		i = (i + 1) % 256;
		j = (j + sbox[i]) % 256;
		let temp = sbox[i];
		sbox[i] = sbox[j];
		sbox[j] = temp;
		let k = sbox[(sbox[i] + sbox[j]) % 256];
		result += String.fromCharCode(text.charCodeAt(idx) ^ k);
	}
	return result;
};

const decryptVigenere = (text, keyword) => {
	let decryptedText = '';
	for (let i = 0; i < text.length; i++) {
		const keyIndex = i % keyword.length;
		const keyChar = keyword.charCodeAt(keyIndex) - 32;
		const textChar = text.charCodeAt(i) - keyChar;
		decryptedText += String.fromCharCode(textChar);
	}
	return decryptedText;
};

const decryptModifiedRC4 = (encryptedText, keyword) => {
	const rc4Decrypted = decryptVigenere(encryptedText, keyword);
	const finalDecrypted = decryptRC4(rc4Decrypted, keyword);
	return finalDecrypted;
};

function base64ToBytes(base64) {
	const binString = atob(base64);
	return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
	const binString = Array.from(bytes, (byte) =>
		String.fromCodePoint(byte)
	).join('');
	return btoa(binString);
}

// Usage
function toBase64(input) {
	return bytesToBase64(new TextEncoder().encode(input));
}

function fromBase64(input) {
	return new TextDecoder().decode(base64ToBytes(input));
}

export { encryptModifiedRC4, decryptModifiedRC4, toBase64, fromBase64 };
