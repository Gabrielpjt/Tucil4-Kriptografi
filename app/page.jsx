'use client';

import TableNilai from '../components/TableNilai';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import InputRC4Key from '../components/InputRC4Key';
import { encrypt, decrypt, toBase64, fromBase64 } from '../utils/modifiedRC4';

export default function Home() {
	const [dataNilai, setDataNilai] = useState([]);
	const [kunciRC4, setKunciRC4] = useState('');
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
						const encryptNim = toBase64(encrypt(nilai.nim, kunciRC4));
						const encryptNama = toBase64(encrypt(nilai.nama, kunciRC4));
						const encryptNilaiObj = {};
						for (let i = 1; i < 11; i++) {
							encryptNilaiObj[`mk${i}`] = {
								kode: toBase64(encrypt(nilai[`mk${i}`].kode, kunciRC4)),
								namaMK: toBase64(encrypt(nilai[`mk${i}`].namaMK, kunciRC4)),
								nilai: toBase64(encrypt(nilai[`mk${i}`].nilai, kunciRC4)),
								SKS: toBase64(
									encrypt(nilai[`mk${i}`].SKS.toString(), kunciRC4)
								),
							};
						}
						return {
							...nilai,
							...encryptNilaiObj,
							nim: encryptNim,
							nama: encryptNama,
						};
					})
				);
			} else {
				setDataNilai((dataNilai) =>
					dataNilai.map((nilai) => {
						const decryptNim = decrypt(fromBase64(nilai.nim), kunciRC4);
						const decryptNama = decrypt(fromBase64(nilai.nama), kunciRC4);
						const decryptNilaiObj = {};
						for (let i = 1; i < 11; i++) {
							decryptNilaiObj[`mk${i}`] = {
								kode: decrypt(fromBase64(nilai[`mk${i}`].kode), kunciRC4),
								namaMK: decrypt(fromBase64(nilai[`mk${i}`].namaMK), kunciRC4),
								nilai: decrypt(fromBase64(nilai[`mk${i}`].nilai), kunciRC4),
								SKS: decrypt(
									fromBase64(nilai[`mk${i}`].SKS.toString()),
									kunciRC4
								),
							};
						}
						return {
							...nilai,
							...decryptNilaiObj,
							nim: decryptNim,
							nama: decryptNama,
						};
					})
				);
			}
		}
	}, [kunciRC4, isEncrypted]);

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
