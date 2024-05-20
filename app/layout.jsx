import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tugas 4 Kripto',
	description: 'Tugas 4 Kripto',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} vh-100`}>
				<Container className='d-flex flex-column h-100'>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
