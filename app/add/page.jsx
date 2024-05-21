'use client';

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Add = () => {
	const [dataNilai, setDataNilai] = useState({});
	const router = useRouter();

	const handleAdd = async (e) => {
		e.preventDefault();
		const res = await fetch('/api/nilaiplain', {
			method: 'POST',
			body: JSON.stringify(dataNilai),
		});
		const data = await res.json();
		console.log(data);
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
									onChange={(e) =>
										setDataNilai((data) => ({ ...data, nim: e.target.value }))
									}
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
									onChange={(e) =>
										setDataNilai((data) => ({ ...data, nama: e.target.value }))
									}
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
												setDataNilai((data) => ({
													...data,
													[`kode-MK${i + 1}`]: e.target.value,
												}))
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
												setDataNilai((data) => ({
													...data,
													[`nama-MK${i + 1}`]: e.target.value,
												}))
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
										<Form.Control
											type='text'
											placeholder='Masukkan Nilai'
											onChange={(e) =>
												setDataNilai((data) => ({
													...data,
													[`nilai-MK${i + 1}`]: e.target.value,
												}))
											}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3' controlId={`formSKSMK${i + 1}`}>
										<Form.Label>Jumlah SKS MK{i + 1}</Form.Label>
										<Form.Control
											type='number'
											placeholder='Masukkan Jumlah SKS'
											onChange={(e) =>
												setDataNilai((data) => ({
													...data,
													[`SKS-MK${i + 1}`]: e.target.value,
												}))
											}
											required
											min={0}
											max={3}
										/>
									</Form.Group>
								</Col>
							</Row>
						</Container>
					</div>
				))}
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
