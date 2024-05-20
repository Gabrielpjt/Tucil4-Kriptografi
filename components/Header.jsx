import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
			<Link
				href='/'
				className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
			>
				<span className='display-5 fw-medium'>Daftar Nilai</span>
			</Link>

			<Button variant='primary'>Tambah nilai</Button>
		</header>
	);
};

export default Header;
