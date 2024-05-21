'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import RowTableNilai from './RowTableNilai';

const TableNilai = ({ dataNilai }) => {
	const columns = ['NIM', 'Nama'];
	for (let i = 1; i < 11; i++) {
		columns.push(`Kode MK${i}`);
		columns.push(`Nama MK${i}`);
		columns.push(`Nilai MK${i}`);
		columns.push(`SKS MK${i}`);
	}

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
						<RowTableNilai key={nilai._id} nilai={nilai} />
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TableNilai;
