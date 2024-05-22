'use client';

import TableNilai from '../components/TableNilai';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import InputRC4Key from '../components/InputRC4Key';
import { encrypt, decrypt, toBase64, fromBase64 } from '../utils/modifiedRC4';

export default function Home() {
	const [dataNilai, setDataNilai] = useState([]);
	const [kunci, setKunci] = useState('');
	const [isEncrypted, setIsEncrypted] = useState(null);
	useEffect(() => {
		async function getData() {
			const res = await fetch('/api/nilaiplain', { next: { revalidate: 120 } });
			const data = await res.json();
			setDataNilai(data);
		}
		getData();
	}, []);

	useEffect(() => {
		if (isEncrypted !== null) {
			if (isEncrypted) {
				// proses RC4 ke dataNilai
				setDataNilai((dataNilai) =>
					dataNilai.map((nilai) => {
						const encryptNim = toBase64(encrypt(nilai.nim, kunci));
						const encryptNama = toBase64(encrypt(nilai.nama, kunci));
						const encryptIPK = toBase64(encrypt(nilai.ipk.toString(), kunci));
						const encryptNilaiObj = {};
						for (let i = 1; i < 11; i++) {
							encryptNilaiObj[`mk${i}`] = {
								kode: toBase64(encrypt(nilai[`mk${i}`].kode, kunci)),
								namaMK: toBase64(encrypt(nilai[`mk${i}`].namaMK, kunci)),
								nilai: toBase64(encrypt(nilai[`mk${i}`].nilai, kunci)),
								SKS: toBase64(encrypt(nilai[`mk${i}`].SKS.toString(), kunci)),
							};
						}
						return {
							...nilai,
							...encryptNilaiObj,
							nim: encryptNim,
							nama: encryptNama,
							ipk: encryptIPK,
						};
					})
				);
			} else {
				setDataNilai((dataNilai) =>
					dataNilai.map((nilai) => {
						const decryptNim = decrypt(fromBase64(nilai.nim), kunci);
						const decryptNama = decrypt(fromBase64(nilai.nama), kunci);
						const decryptIPK = decrypt(fromBase64(nilai.IPK.toString()), kunci);
						const decryptNilaiObj = {};
						for (let i = 1; i < 11; i++) {
							decryptNilaiObj[`mk${i}`] = {
								kode: decrypt(fromBase64(nilai[`mk${i}`].kode), kunci),
								namaMK: decrypt(fromBase64(nilai[`mk${i}`].namaMK), kunci),
								nilai: decrypt(fromBase64(nilai[`mk${i}`].nilai), kunci),
								SKS: decrypt(fromBase64(nilai[`mk${i}`].SKS.toString()), kunci),
							};
						}
						return {
							...nilai,
							...decryptNilaiObj,
							nim: decryptNim,
							nama: decryptNama,
							ipk: decryptIPK,
						};
					})
				);
			}
		}
	}, [kunci, isEncrypted]);

	if (dataNilai.length !== 0) {
		return (
			<>
				<InputRC4Key
					kunci={kunci}
					setKunci={setKunci}
					isEncrypted={isEncrypted}
					setIsEncrypted={setIsEncrypted}
				/>
				<TableNilai dataNilai={dataNilai} kunci={kunci} />
			</>
		);
	} else {
		return (
			<div className='flex-grow-1 d-flex justify-content-center'>
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</div>
		);
	}
}
