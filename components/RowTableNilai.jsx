import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const RowTableNilai = ({ nilai }) => {
	const handleDownload = async (id) => {
		const res = await fetch(`/api/downloadpdf/${id}`);
		const data = await res.json();
		const downloadLink = `/assets/${data.fileName}`;

		const link = document.createElement('a');
		link.href = downloadLink;
		link.setAttribute('download', '');
		link.click();
	};
	return (
		<tr key={nilai._id}>
			<td>{nilai.nim}</td>
			<td>{nilai.nama}</td>
			{Array.from(Array(10).keys()).map((i) => (
				<React.Fragment key={i}>
					<td>{nilai[`mk${i + 1}`]['kode']}</td>
					<td>{nilai[`mk${i + 1}`]['namaMK']}</td>
					<td>{nilai[`mk${i + 1}`]['nilai']}</td>
					<td>{nilai[`mk${i + 1}`]['SKS']}</td>
				</React.Fragment>
			))}
			<td>
				<Button variant='secondary' onClick={() => handleDownload(nilai._id)}>
					Download
				</Button>
			</td>
		</tr>
	);
};

export default RowTableNilai;
