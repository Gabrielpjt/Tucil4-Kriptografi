import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

const InputRC4Key = ({
	kunciRC4,
	setKunciRC4,
	isEncrypted,
	setIsEncrypted,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<InputGroup className='mb-3'>
						<InputGroup.Text id='desc'>Kunci RC4</InputGroup.Text>
						<Form.Control
							placeholder='Masukkan Kunci RC4 Sebelum Enkripsi'
							aria-label='Masukkan Kunci RC4 Sebelum Enkripsi'
							aria-describedby='desc'
							onChange={(e) => setKunciRC4(e.target.value)}
							disabled={isEncrypted}
						/>
					</InputGroup>
				</Col>
				<Col md='auto'>
					<Button
						onClick={() => setIsEncrypted((old) => !old)}
						disabled={kunciRC4 === ''}
					>
						{isEncrypted ? 'Dekripsi' : 'Enkripsi'}
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default InputRC4Key;
