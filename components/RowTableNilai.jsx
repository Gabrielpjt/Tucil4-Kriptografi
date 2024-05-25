import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Sha3 from '../utils/SHA3';
import RSA from '../utils/RSA';
import { toBase64 } from '../utils/modifiedRC4';

const RowTableNilai = ({ nilai, kunci, rsaObj }) => {
	const [isVerified, setIsVerified] = useState(null);
	const [tandatangan, setTandatangan] = useState(() => nilai.tandatangan);
	const [publicKey, setPublicKey] = useState(() => nilai.publicKey);

	const handleTandatangan = async (id) => {
		const nilaiString = Array.from(Array(10).keys())
			.map(
				(i) =>
					`${nilai[`mk${i + 1}`]['kode']}${nilai[`mk${i + 1}`]['namaMK']}${
						nilai[`mk${i + 1}`]['nilai']
					}${nilai[`mk${i + 1}`]['SKS']}`
			)
			.join('');
		const dataString = nilai.nim + nilai.nama + nilaiString + nilai.ipk;
		const message = dataString;
		const options = {
			padding: 'sha-3', // Opsi padding: 'sha-3' atau 'keccak'
			msgFormat: 'string', // Format pesan: 'string' atau 'hex-bytes'
			outFormat: 'hex', // Format keluaran: 'hex', 'hex-b' (byte separated), 'hex-w' (word separated)
		};
		const hashresult = toBase64(Sha3.hash224(message, options));
		console.log(hashresult);
		// Enkripsi hash result dengan kunci privat RSA
		const encryptedHash = rsaObj.doEncryption(hashresult);
		console.log(encryptedHash);

		const res = await fetch('/api/nilai', {
			method: 'PUT',
			body: JSON.stringify({
				tandatangan: encryptedHash,
				id,
				e: rsaObj.getPublicKey().e.toString(),
				n: rsaObj.getPublicKey().n.toString(),
			}),
		});
		const data = await res.json();
		console.log(data);
		setTandatangan(data.tandatangan);
		setPublicKey({ e: data.e, n: data.n });
	};

	const handleVerifikasi = () => {
		const nilaiString = Array.from(Array(10).keys())
			.map(
				(i) =>
					`${nilai[`mk${i + 1}`]['kode']}${nilai[`mk${i + 1}`]['namaMK']}${
						nilai[`mk${i + 1}`]['nilai']
					}${nilai[`mk${i + 1}`]['SKS']}`
			)
			.join('');
		const dataString = nilai.nim + nilai.nama + nilaiString + nilai.ipk;

		const message = dataString;
		const options = {
			padding: 'sha-3', // Opsi padding: 'sha-3' atau 'keccak'
			msgFormat: 'string', // Format pesan: 'string' atau 'hex-bytes'
			outFormat: 'hex', // Format keluaran: 'hex', 'hex-b' (byte separated), 'hex-w' (word separated)
		};
		const shaDataString = toBase64(Sha3.hash224(message, options));

		const rsa = new RSA(3, 5); // ini ngasal p dan q nya
		console.log(publicKey);
		const decryptedSignature = rsa.doDecryptionWithKey(
			tandatangan,
			publicKey.e,
			publicKey.n
		);

		// Bandingkan hasil dekripsi RSA dengan nilai SHA-1 dari dataString
		setIsVerified(decryptedSignature === shaDataString);
	};

	const handleDownload = async (id) => {
		const res = await fetch(`/api/downloadpdf/${id}?key=${kunci}`, {
			method: 'POST',
			body: JSON.stringify({ kunci }),
		});
		const data = await res.json();
		const downloadLink = `/assets/${data.fileName}`;

		const link = document.createElement('a');
		link.href = downloadLink;
		link.setAttribute('download', '');
		link.click();
	};

	return (
		<tr key={nilai._id}>
			<td>{nilai.nim}</td>
			<td>{nilai.nama}</td>
			{Array.from(Array(10).keys()).map((i) => (
				<React.Fragment key={i}>
					<td>{nilai[`mk${i + 1}`]['kode']}</td>
					<td>{nilai[`mk${i + 1}`]['namaMK']}</td>
					<td>{nilai[`mk${i + 1}`]['nilai']}</td>
					<td>{nilai[`mk${i + 1}`]['SKS']}</td>
				</React.Fragment>
			))}
			<td>{nilai.ipk}</td>
			<td>
				{tandatangan ? (
					tandatangan.substr(0, 5)
				) : (
					<Button
						variant='secondary'
						onClick={() => handleTandatangan(nilai._id)}
						disabled={kunci === '' || rsaObj === null}
					>
						Tanda tangan
					</Button>
				)}
			</td>
			<td>
				{isVerified === null ? (
					<Button
						variant='secondary'
						onClick={() => handleVerifikasi(nilai._id)}
						disabled={kunci === '' || rsaObj === null || !tandatangan}
					>
						Verifikasi
					</Button>
				) : (
					isVerified.toString()
				)}
			</td>
			<td>
				<Button
					variant='secondary'
					onClick={() => handleDownload(nilai._id)}
					disabled={kunci === ''}
				>
					Download
				</Button>
			</td>
		</tr>
	);
};

export default RowTableNilai;
