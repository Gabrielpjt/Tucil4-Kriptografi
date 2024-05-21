'use client';

import TableNilai from '../components/TableNilai';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import InputRC4Key from '../components/InputRC4Key';
import { encrypt, decrypt } from '../utils/modifiedRC4';

export default function Home() {
	const [dataNilai, setDataNilai] = useState([]);
	const [kunciRC4, setKunciRC4] = useState('');
	const [isEncrypted, setIsEncrypted] = useState(false);
	useEffect(() => {
		async function getData() {
			const res = await fetch('/api/nilaiplain', { next: { revalidate: 120 } });
			const data = await res.json();
			setDataNilai(data);
		}
		getData();
	}, []);

	useEffect(() => {
		if (isEncrypted) {
			// proses RC4 ke dataNilai
			setDataNilai((dataNilai) =>
				dataNilai.map((nilai) => {
					const encryptNim = encrypt(nilai.nim, kunciRC4);
					const encryptNama = encrypt(nilai.nama, kunciRC4);
					const encryptNilaiObj = {};
					for (let i = 1; i < 11; i++) {
						encryptNilaiObj[`mk${i}`] = {
							kode: encrypt(nilai[`mk${i}`].kode, kunciRC4),
							namaMK: encrypt(nilai[`mk${i}`].namaMK, kunciRC4),
							nilai: encrypt(nilai[`mk${i}`].nilai, kunciRC4),
							SKS: encrypt(nilai[`mk${i}`].SKS.toString(), kunciRC4),
						};
					}
					return { ...encryptNilaiObj, nim: encryptNim, nama: encryptNama };
				})
			);
		}
		// if (kunciRC4 !== '' && !isEncrypted) {
		// 	console.log('dekripsi');
		// }
	}, [kunciRC4, isEncrypted]);

	console.log(dataNilai[0]?.nama);

	if (dataNilai.length !== 0) {
		return (
			<>
				<InputRC4Key
					kunciRC4={kunciRC4}
					setKunciRC4={setKunciRC4}
					isEncrypted={isEncrypted}
					setIsEncrypted={setIsEncrypted}
				/>
				<TableNilai dataNilai={dataNilai} />
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
