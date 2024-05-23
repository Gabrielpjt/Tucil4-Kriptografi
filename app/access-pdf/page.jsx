'use client';

import { useState } from 'react';
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';

const AccessPDF = () => {
	const [file, setFile] = useState(null);
	const [kunci, setKunci] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('kunci', kunci);
		formData.append('file', file);
		try {
			const res = await fetch('/api/decryptPdf', {
				method: 'POST',
				body: formData,
			});
			const data = await res.json();

			const downloadLink = `/assets/${data.fileName}`;
			const link = document.createElement('a');
			link.href = downloadLink;
			link.setAttribute('download', '');
			link.click();
		} catch (error) {
			console.error('something went wrong...');
		}
		console.log(file);
	};

	return (
		<div className='flex-grow-1'>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='desc'>Kunci</InputGroup.Text>
							<Form.Control
								placeholder='Masukkan Kunci Sebelum Dekripsi'
								aria-label='Masukkan Kunci Sebelum Dekripsi'
								aria-describedby='desc'
								onChange={(e) => setKunci(e.target.value)}
							/>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group controlId='formFile' className='mb-3'>
							<Form.Label>Upload file PDF transkrip</Form.Label>
							<Form.Control
								type='file'
								onChange={(e) => setFile(e.target.files[0])}
								required
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant='primary' type='submit' className='w-100 p-2'>
							Upload file
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default AccessPDF;
