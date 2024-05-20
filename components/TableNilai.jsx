import { Table } from 'react-bootstrap';

const TableNilai = () => {
	const columns = ['NIM', 'Nama'];
	for (let i = 1; i <= 11; i++) {
		columns.push(`Kode MK${i}`);
		columns.push(`Nama MK${i}`);
		columns.push(`Nilai MK${i}`);
		columns.push(`SKS MK${i}`);
	}
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
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default TableNilai;
