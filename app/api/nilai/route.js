import connect from '../../../utils/db';
import Nilai from '../../../utils/dataModel';

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
			ipk: body.ipk,
			nim: body.nim,
			nama: body.nama,
			tandatangan: body.tandatangan,
			...nilaiObjs,
		};
		const createdData = await Nilai.create(dataToCreate);
		return Response.json({ message: 'Data Added Successfully' });
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}

export async function GET(req) {
	try {
		await connect();
		const data = await Nilai.find({});
		return Response.json(data);
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}

export async function PUT(req) {
	const body = await req.json();
	const id = body.id;
	const tandatangan = body.tandatangan;
	const e = body.e;
	const n = body.n;
	try {
		await connect();
		const data = await Nilai.findByIdAndUpdate(id, {
			tandatangan,
			publicKey: { e, n },
		});
		return Response.json({ tandatangan, e, n });
	} catch (error) {
		console.log(error);
		return Response.json({ message: error }, { status: 500 });
	}
}
