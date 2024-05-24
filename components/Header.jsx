'use client';

import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
			<Link
				href='/'
				className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
			>
				<span className='display-5 fw-medium'>Daftar Nilai</span>
			</Link>

			{!pathname.includes('add') && (
				<div>
					<Button
						variant='primary'
						onClick={() => router.push('/add')}
						className='me-2'
					>
						Tambah nilai
					</Button>
					<Button variant='primary' onClick={() => router.push('/access-pdf')}>
						Lihat transkrip (pdf)
					</Button>
				</div>
			)}
		</header>
	);
};

export default Header;
