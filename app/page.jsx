'use client';

import TableNilai from '../components/TableNilai';
import { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import InputKey from '../components/InputKey';
import {
	encryptModifiedRC4,
	decryptModifiedRC4,
	toBase64,
	fromBase64,
} from '../utils/modifiedRC4';

export default function Home() {
	const [dataNilai, setDataNilai] = useState(null);
	const [kunci, setKunci] = useState('');
	const [isEncrypted, setIsEncrypted] = useState(true);
	useEffect(() => {
		async function getData() {
			const res = await fetch('/api/nilai', { next: { revalidate: 120 } });
			const data = await res.json();
			setDataNilai(data);
		}
		getData();
	}, []);

	const handleEncryptDecrypt = () => {
		if (isEncrypted) {
			setDataNilai((dataNilai) =>
				dataNilai.map((nilai) => {
					const decryptNim = decryptModifiedRC4(fromBase64(nilai.nim), kunci);
					const decryptNama = decryptModifiedRC4(fromBase64(nilai.nama), kunci);
					const decryptIPK = decryptModifiedRC4(
						fromBase64(nilai.ipk.toString()),
						kunci
					);
					const tandatangan = nilai.tandatangan
					const decryptNilaiObj = {};
					for (let i = 1; i < 11; i++) {
						decryptNilaiObj[`mk${i}`] = {
							kode: decryptModifiedRC4(fromBase64(nilai[`mk${i}`].kode), kunci),
							namaMK: decryptModifiedRC4(
								fromBase64(nilai[`mk${i}`].namaMK),
								kunci
							),
							nilai: decryptModifiedRC4(
								fromBase64(nilai[`mk${i}`].nilai),
								kunci
							),
							SKS: decryptModifiedRC4(
								fromBase64(nilai[`mk${i}`].SKS.toString()),
								kunci
							),
						};
					}
					return {
						...nilai,
						...decryptNilaiObj,
						nim: decryptNim,
						nama: decryptNama,
						ipk: decryptIPK,
						tandatangan : tandatangan
					};
				})
			);
		} else {
			setDataNilai((dataNilai) =>
				dataNilai.map((nilai) => {
					const encryptNim = toBase64(encryptModifiedRC4(nilai.nim, kunci));
					const encryptNama = toBase64(encryptModifiedRC4(nilai.nama, kunci));
					const encryptIPK = toBase64(
						encryptModifiedRC4(nilai.ipk.toString(), kunci)
					);
					const tandatangan = nilai.tandatangan
					const encryptNilaiObj = {};
					for (let i = 1; i < 11; i++) {
						encryptNilaiObj[`mk${i}`] = {
							kode: toBase64(encryptModifiedRC4(nilai[`mk${i}`].kode, kunci)),
							namaMK: toBase64(
								encryptModifiedRC4(nilai[`mk${i}`].namaMK, kunci)
							),
							nilai: toBase64(encryptModifiedRC4(nilai[`mk${i}`].nilai, kunci)),
							SKS: toBase64(
								encryptModifiedRC4(nilai[`mk${i}`].SKS.toString(), kunci)
							),
						};
					}
					return {
						...nilai,
						...encryptNilaiObj,
						nim: encryptNim,
						nama: encryptNama,
						ipk: encryptIPK,
						tandatangan: tandatangan
					};
				})
			);
		}
	};

	if (dataNilai !== null) {
		if (dataNilai.length !== 0) {
			return (
				<>
					<InputKey
						kunci={kunci}
						setKunci={setKunci}
						isEncrypted={isEncrypted}
						setIsEncrypted={setIsEncrypted}
						handleEncryptDecrypt={handleEncryptDecrypt}
					/>
					<TableNilai dataNilai={dataNilai} kunci={kunci} />
				</>
			);
		} else {
			return (
				<div className='flex-grow-1 d-flex justify-content-center align-items-center'>
					<Alert className='text-center'>
						Tidak ada nilai, tambahkan nilai baru dengan menekan tombol di atas!
					</Alert>
				</div>
			);
		}
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
