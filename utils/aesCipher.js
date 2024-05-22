import aesjs from 'aes-js';

function generateKey(textKey) {
	console.log(textKey);
	const key = [];
	if (textKey.length >= 16) {
		for (let i = 0; i <= 15; i++) {
			key.push(textKey.charCodeAt(i));
		}
	} else {
		while (key.length < 16) {
			for (let i = 0; i < textKey.length; i++) {
				key.push(textKey.charCodeAt(i));
			}
		}
		while (key.length > 16) {
			key.pop();
		}
	}
	console.log(key);
	return key;
}

function encryptAES(textKey, bytes) {
	const key = generateKey(textKey);
	const aesCtr = new aesjs.ModeOfOperation.ctr(key);
	const encryptedBytes = aesCtr.encrypt(bytes);
	return encryptedBytes;
}

function decryptAES(textKey, bytes) {
	const key = generateKey(textKey);
	const aesCtr = new aesjs.ModeOfOperation.ctr(key);
	const decryptedBytes = aesCtr.decrypt(bytes);
	return decryptedBytes;
}

export { encryptAES, decryptAES };
