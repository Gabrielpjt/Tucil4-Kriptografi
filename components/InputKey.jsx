import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

const InputKey = ({
	kunci,
	setKunci,
	isEncrypted,
	setIsEncrypted,
	handleEncryptDecrypt,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<InputGroup className='mb-3'>
						<InputGroup.Text id='desc'>Kunci RC4</InputGroup.Text>
						<Form.Control
							placeholder='Masukkan Kunci RC4 Sebelum Dekripsi'
							aria-label='Masukkan Kunci RC4 Sebelum Dekripsi'
							aria-describedby='desc'
							onChange={(e) => setKunci(e.target.value)}
							disabled={!isEncrypted}
						/>
					</InputGroup>
				</Col>
				<Col md='auto'>
					<Button
						onClick={() => {
							setIsEncrypted((old) => !old);
							handleEncryptDecrypt();
						}}
						disabled={kunci === '' && isEncrypted}
					>
						{isEncrypted ? 'Dekripsi' : 'Enkripsi'}
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default InputKey;
