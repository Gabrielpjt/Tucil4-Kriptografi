import connect from '../../../../utils/db';
import NilaiPlain from '../../../../utils/dataModel';
import fs from 'fs';
import path from 'path';
import generateTranskrip from '../../../../utils/generatePDF';
import { encryptAES, decryptAES } from '../../../../utils/aesCipher';

export async function GET(request, { params }) {
	const kunci = request.nextUrl.searchParams.get('key');
	const id = params.id;
	try {
		await connect();
		const data = await NilaiPlain.findById(id);
		const pdf = await generateTranskrip(data);
		const encryptedPdf = encryptAES(kunci, pdf);
		fs.writeFileSync(
			path.join(process.cwd(), 'public/assets/', `transkrip_${data.nim}.pdf`),
			encryptedPdf
		);
		return Response.json({ fileName: `transkrip_${data.nim}.pdf` });
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}
