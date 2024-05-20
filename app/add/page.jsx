'use client';

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Add = () => {
	return (
		<>
			<h3 className='mb-4'>Tambah Entry Baru</h3>
			<Form>
				<Container>
					<Row>
						<Col>
							<Form.Group className='mb-3' controlId='formNim'>
								<Form.Label>NIM</Form.Label>
								<Form.Control type='text' placeholder='Masukkan NIM' />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className='mb-3' controlId='formNama'>
								<Form.Label>Nama</Form.Label>
								<Form.Control type='text' placeholder='Masukkan Nama' />
							</Form.Group>
						</Col>
					</Row>
				</Container>
				{Array.from(Array(10).keys()).map((i) => (
					<>
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
									<Form.Group className='mb-3' controlId='formKodeMK'>
										<Form.Label>Kode MK{i + 1}</Form.Label>
										<Form.Control type='text' placeholder='Masukkan Kode MK' />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3' controlId='formNamaMK'>
										<Form.Label>Nama MK{i + 1}</Form.Label>
										<Form.Control type='text' placeholder='Masukkan Nama MK' />
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className='mb-3' controlId='formNilai'>
										<Form.Label>Nilai MK{i + 1}</Form.Label>
										<Form.Control type='number' placeholder='Masukkan Nilai' />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3' controlId='formSKS'>
										<Form.Label>Jumlah SKS MK{i + 1}</Form.Label>
										<Form.Control
											type='number'
											placeholder='Masukkan Jumlah SKS'
										/>
									</Form.Group>
								</Col>
							</Row>
						</Container>
					</>
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
