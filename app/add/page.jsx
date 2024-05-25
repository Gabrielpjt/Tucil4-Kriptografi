'use client'

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { encryptModifiedRC4, toBase64 } from '../../utils/modifiedRC4';
import Sha3 from '../../utils/SHA3';
import { sha3_224 } from 'js-sha3';

const mappingNilai = {
	A: 4,
	AB: 3.5,
	B: 3,
	BC: 2.5,
	C: 2,
	D: 1.5,
	E: 1,
};

const Add = () => {
	const [dataNilai, setDataNilai] = useState({});
	const [kunci, setKunci] = useState('');
	const [dataString, setDataString] = useState('');
	const router = useRouter();

	const handleDataNilaiChange = (key, value) => {
		setDataNilai((prevDataNilai) => ({ ...prevDataNilai, [key]: value }));
		const updatedValue = typeof value === 'number' ? value.toString() : value;
		setDataString((prevDataString) => prevDataString + updatedValue);
	};
	const handleAdd = async (e) => {
		e.preventDefault();
		let ipk = 0;
		let jumlahSKS = 0;
		for (let i = 1; i < 11; i++) {
			ipk += mappingNilai[dataNilai[`nilai-MK${i}`]] * dataNilai[`SKS-MK${i}`];
			jumlahSKS += Number(dataNilai[`SKS-MK${i}`]);
		}

		ipk = (ipk / jumlahSKS).toFixed(2);
		const message = dataString;
		const options = {
			padding: 'sha-3',      // Opsi padding: 'sha-3' atau 'keccak'
			msgFormat: 'string',   // Format pesan: 'string' atau 'hex-bytes'
			outFormat: 'hex'       // Format keluaran: 'hex', 'hex-b' (byte separated), 'hex-w' (word separated)
		};
		const dataNilaiEncrypted = {
			nim: toBase64(encryptModifiedRC4(dataNilai.nim, kunci)),
			nama: toBase64(encryptModifiedRC4(dataNilai.nama, kunci)),
			ipk: toBase64(encryptModifiedRC4(ipk, kunci)),
			tandatangan: toBase64(Sha3.hash224(message, options)), // Memanggil finalize pada instance SHA3
		};
		for (let i = 1; i < 11; i++) {
			dataNilaiEncrypted[`kode-MK${i}`] = toBase64(
				encryptModifiedRC4(dataNilai[`kode-MK${i}`], kunci)
			);
			dataNilaiEncrypted[`nama-MK${i}`] = toBase64(
				encryptModifiedRC4(dataNilai[`nama-MK${i}`], kunci)
			);
			dataNilaiEncrypted[`nilai-MK${i}`] = toBase64(
				encryptModifiedRC4(dataNilai[`nilai-MK${i}`], kunci)
			);
			dataNilaiEncrypted[`SKS-MK${i}`] = toBase64(
				encryptModifiedRC4(dataNilai[`SKS-MK${i}`], kunci)
			);
		}
		const res = await fetch('/api/nilai', {
			method: 'POST',
			body: JSON.stringify(dataNilaiEncrypted),
		});
		const data = await res.json();
		if (data.message === 'Data Added Successfully') {
			toast('Data Nilai Berhasil Ditambah');
			router.push('/');
		}
	};
	

	return (
		<>
			<h3 className='mb-4'>Tambah Entry Baru</h3>
			<Form onSubmit={handleAdd}>
				<Container>
					<Row>
						<Col>
							<Form.Group className='mb-3' controlId='formNim'>
								<Form.Label>NIM</Form.Label>
								<Form.Control
									type='text'
									placeholder='Masukkan NIM'
									onChange={(e) => handleDataNilaiChange('nim', e.target.value)}
									required
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className='mb-3' controlId='formNama'>
								<Form.Label>Nama</Form.Label>
								<Form.Control
									type='text'
									placeholder='Masukkan Nama'
									onChange={(e) => handleDataNilaiChange('nama', e.target.value)}
									required
								/>
							</Form.Group>
						</Col>
					</Row>
				</Container>
				{Array.from(Array(10).keys()).map((i) => (
					<div key={i}>
						<hr />
						<Container>
							<Row>
								<Col>
									<span className='fs-4 mb-3 d-block fw-medium'>
										Data MK{i + 1}
									</span>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className='mb-3' controlId={`formKodeMK${i + 1}`}>
										<Form.Label>Kode MK{i + 1}</Form.Label>
										<Form.Control
											type='text'
											placeholder='Masukkan Kode MK'
											onChange={(e) =>
												handleDataNilaiChange(`kode-MK${i + 1}`, e.target.value)
											}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3' controlId={`formNamaMK${i + 1}`}>
										<Form.Label>Nama MK{i + 1}</Form.Label>
										<Form.Control
											type='text'
											placeholder='Masukkan Nama MK'
											onChange={(e) =>
												handleDataNilaiChange(`nama-MK${i + 1}`, e.target.value)
											}
											required
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group
										className='mb-3'
										controlId={`formNilaiMK${i + 1}`}
									>
										<Form.Label>Nilai MK{i + 1}</Form.Label>
										<Form.Select
											aria-label='Default select example'
											onChange={(e) =>
												handleDataNilaiChange(`nilai-MK${i + 1}`, e.target.value)
											}
											required
										>
											<option>Pilih Nilai</option>
											<option value='A'>A</option>
											<option value='AB'>AB</option>
											<option value='B'>B</option>
											<option value='BC'>BC</option>
											<option value='C'>C</option>
											<option value='D'>D</option>
											<option value='E'>E</option>
										</Form.Select>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3' controlId={`formSKSMK${i + 1}`}>
										<Form.Label>Jumlah SKS MK{i + 1}</Form.Label>
										<Form.Control
											type='number'
											placeholder='Masukkan Jumlah SKS'
											onChange={(e) =>
												handleDataNilaiChange(`SKS-MK${i + 1}`, e.target.value)
											}
											required
											min={0}
											max={4}
										/>
									</Form.Group>
								</Col>
							</Row>
						</Container>
					</div>
				))}
				<hr />
				<Container>
					<Row>
						<Form.Group className='mb-3' controlId='formKunci'>
							<Form.Label>Kunci</Form.Label>
							<Form.Control
								type='text'
								placeholder='Masukkan Kunci (Gunakan Kunci yang Sama untuk Setiap Entry Nilai)'
								onChange={(e) => setKunci(e.target.value)}
								required
							/>
						</Form.Group>
					</Row>
				</Container>
				<hr />
				<Container>
					<Button variant='primary' type='submit' className='w-100 p-2'>
						Submit
					</Button>
				</Container>
			</Form>
		</>
	);
};

export default Add;