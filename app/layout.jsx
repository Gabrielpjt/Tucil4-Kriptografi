import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tugas 4 Kripto',
	description: 'Tugas 4 Kripto',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} vh-100`}>{children}</body>
		</html>
	);
}