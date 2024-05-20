import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top'>
			<div className='d-flex align-items-center'>
				<Link
					href='/'
					className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'
				>
					<span className='mb-3 mb-md-0 text-body-secondary'>
						Tugas Kriptografi 4
					</span>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
