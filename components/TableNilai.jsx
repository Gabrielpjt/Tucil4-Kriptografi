'use client';

import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const TableNilai = () => {
	const [dataNilai, setDataNilai] = useState([]);

	const columns = ['NIM', 'Nama'];
	for (let i = 1; i < 11; i++) {
		columns.push(`Kode MK${i}`);
		columns.push(`Nama MK${i}`);
		columns.push(`Nilai MK${i}`);
		columns.push(`SKS MK${i}`);
	}

	useEffect(() => {
		async function getData() {
			const res = await fetch('/api/nilai', { next: { revalidate: 120 } });
			const data = await res.json();
			setDataNilai(data);
		}
		getData();
	}, []);

	// BELUM MASUKIN IPK KE TABLE
	return (
		<div className='flex-grow-1'>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={`${col}-${index}`}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataNilai.map((nilai) => (
						<tr key={nilai._id}>
							<td>{nilai.nim}</td>
							<td>{nilai.nama}</td>
							{Array.from(Array(10).keys()).map((i) => (
								<>
									<td>{nilai[`mk${i + 1}`]['kode']}</td>
									<td>{nilai[`mk${i + 1}`]['namaMK']}</td>
									<td>{nilai[`mk${i + 1}`]['nilai']}</td>
									<td>{nilai[`mk${i + 1}`]['SKS']}</td>
								</>
							))}
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TableNilai;
