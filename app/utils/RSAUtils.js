// ./app/utils/RSAUtils.js

import forge from 'node-forge';

// Fungsi untuk membangkitkan pasangan kunci RSA
export function generateRSAKeyPair() {
  // Membangkitkan pasangan kunci RSA dengan panjang 2048 bit
  const keyPair = forge.pki.rsa.generateKeyPair(2048);

  // Mengkonversi kunci publik dan kunci privat ke format PEM
  const publicKeyPEM = forge.pki.publicKeyToPem(keyPair.publicKey);
  const privateKeyPEM = forge.pki.privateKeyToPem(keyPair.privateKey);

  return {
    publicKey: publicKeyPEM,
    privateKey: privateKeyPEM,
  };
}
