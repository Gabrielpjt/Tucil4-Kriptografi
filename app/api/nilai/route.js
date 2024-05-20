import connect from '../../../utils/db';
import NilaiPlain from '../../../utils/dataModel';

export async function POST(req) {
	try {
		await connect();
		const body = await req.json();
		const nilaiObjs = {};
		for (let i = 1; i <= 11; i++) {
			const nilaiObj = {
				kode: body[`kode-MK${i}`],
				namaMK: body[`nama-MK${i}`],
				nilai: body[`nilai-MK${i}`],
				SKS: body[`SKS-MK${i}`],
			};
			nilaiObjs[`mk${i}`] = nilaiObj;
		}
		console.log(nilaiObjs);
		const dataToCreate = {
			nim: body.nim,
			nama: body.nama,
			...nilaiObjs,
		};
		const createdData = await NilaiPlain.create(dataToCreate);
		console.log(createdData);
		return Response.json({ message: 'Hello World' });
	} catch (error) {
		console.log(error);
	}
}
