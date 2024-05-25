import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Sha3 from '../utils/SHA3';
import RSA from '../utils/RSA';

const RowTableNilai = ({ nilai, kunci }) => {
    const [isVerified, setIsVerified] = useState(false);

    const handleDownload = async (id) => {
        const res = await fetch(`/api/downloadpdf/${id}?key=${kunci}`, {
            method: 'POST',
            body: JSON.stringify({ kunci }),
        });
        const data = await res.json();
        const downloadLink = `/assets/${data.fileName}`;

        const link = document.createElement('a');
        link.href = downloadLink;
        link.setAttribute('download', '');
        link.click();

        const dataString = Array.from(Array(10).keys()).map(i =>
            `${nilai[`mk${i + 1}`]['kode']}${nilai[`mk${i + 1}`]['namaMK']}${nilai[`mk${i + 1}`]['nilai']}${nilai[`mk${i + 1}`]['SKS']}`
        ).join('');

        // Hitung nilai SHA-1 dari dataString
        const shaDataString = Sha3(dataString);
        const rsa = new RSA(17, 19);
        const decryptedSignature = rsa.doDecryption(nilai.tandatangan);

        // Bandingkan hasil dekripsi RSA dengan nilai SHA-1 dari dataString
        setIsVerified(decryptedSignature === shaDataString);
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
            <td>{nilai.ipk}</td>
            <td>{nilai.tandatangan ? nilai.tandatangan.substr(0, 5) : ''}</td> {/* Memeriksa apakah tandatangan ada sebelum mencoba mengaksesnya */}
            <td>{isVerified.toString()}</td>
            <td>
                <Button
                    variant='secondary'
                    onClick={() => handleDownload(nilai._id)}
                    disabled={kunci === ''}
                >
                    Download
                </Button>
            </td>
        </tr>
    );
};

export default RowTableNilai;
