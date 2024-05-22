import connect from '../../../utils/db';
import NilaiPlain from '../../../utils/dataModel';

export async function POST(req) {
	try {
		await connect();
		const body = await req.json();
		const nilaiObjs = {};
		for (let i = 1; i < 11; i++) {
			const nilaiObj = {
				kode: body[`kode-MK${i}`],
				namaMK: body[`nama-MK${i}`],
				nilai: body[`nilai-MK${i}`],
				SKS: body[`SKS-MK${i}`],
			};
			nilaiObjs[`mk${i}`] = nilaiObj;
		}
		const dataToCreate = {
			nim: body.nim,
			nama: body.nama,
			...nilaiObjs,
		};
		const createdData = await NilaiPlain.create(dataToCreate);
		return Response.json({ message: 'Data Added Successfully' });
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}

export async function GET(req) {
	try {
		await connect();
		const data = await NilaiPlain.find({});
		return Response.json(data);
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}
