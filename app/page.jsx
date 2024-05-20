import { Container } from 'react-bootstrap';
import TableNilai from '@/components/TableNilai';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<Container className='d-flex flex-column h-100'>
			<Header />
			<TableNilai />
			<Footer />
		</Container>
	);
}
