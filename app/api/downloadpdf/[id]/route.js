import connect from '../../../../utils/db';
import Nilai from '../../../../utils/dataModel';
import fs from 'fs';
import path from 'path';
import generateTranskrip from '../../../../utils/generatePDF';
import { encryptAES } from '../../../../utils/aesCipher';
import { decryptModifiedRC4, fromBase64 } from '../../../../utils/modifiedRC4';

export async function POST(request, { params }) {
	const id = params.id;
	try {
		await connect();
		const body = await request.json();
		const kunci = body.kunci;
		const data = await Nilai.findById(id);
		const decryptNilaiObj = {};
		for (let i = 1; i < 11; i++) {
			decryptNilaiObj[`mk${i}`] = {
				kode: decryptModifiedRC4(fromBase64(data[`mk${i}`].kode), kunci),
				namaMK: decryptModifiedRC4(fromBase64(data[`mk${i}`].namaMK), kunci),
				nilai: decryptModifiedRC4(fromBase64(data[`mk${i}`].nilai), kunci),
				SKS: decryptModifiedRC4(
					fromBase64(data[`mk${i}`].SKS.toString()),
					kunci
				),
			};
		}
		const dataDecrypted = {
			nim: decryptModifiedRC4(fromBase64(data.nim), kunci),
			nama: decryptModifiedRC4(fromBase64(data.nama), kunci),
			ipk: decryptModifiedRC4(fromBase64(data.ipk), kunci),
			...decryptNilaiObj,
			tandatangan: data.tandatangan
		};
		const pdf = await generateTranskrip(dataDecrypted);
		const encryptedPdf = encryptAES(kunci, pdf);
		fs.writeFileSync(
			path.join(
				process.cwd(),
				'public/assets/',
				`transkrip_${dataDecrypted.nim}.pdf`
			),
			encryptedPdf
		);
		return Response.json({ fileName: `transkrip_${dataDecrypted.nim}.pdf` });
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}
