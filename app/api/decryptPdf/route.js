import fs from 'fs';
import path from 'path';
import { decryptAES } from '../../../utils/aesCipher';

export async function POST(request) {
	const formData = await request.formData();

	const file = formData.get('file');
	const kunci = formData.get('kunci');
	if (!file) {
		return NextResponse.json({ error: 'No files received.' }, { status: 400 });
	}

	const buffer = Buffer.from(await file.arrayBuffer());
	const fileName = file.name.split('.')[0] + '_decrypted.pdf';
	const decryptedPdf = decryptAES(kunci, buffer);
	try {
		fs.writeFileSync(
			path.join(process.cwd(), 'public/assets/' + fileName),
			decryptedPdf
		);
		return Response.json({
			fileName,
		});
	} catch (error) {
		console.log('Error occured ', error);
		return Response.json({ Message: error, status: 500 });
	}
}
