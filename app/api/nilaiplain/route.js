import connect from '../../../utils/db';
import NilaiPlain from '../../../utils/dataModel';

export async function POST(req) {
	const mappingNilai = {
		A: 4,
		AB: 3.5,
		B: 3,
		BC: 2.5,
		D: 2,
		E: 1.5,
	};
	try {
		await connect();
		const body = await req.json();
		const nilaiObjs = {};
		let ipk = 0;
		let jumlahSKS = 0;
		for (let i = 1; i < 11; i++) {
			const nilaiObj = {
				kode: body[`kode-MK${i}`],
				namaMK: body[`nama-MK${i}`],
				nilai: body[`nilai-MK${i}`],
				SKS: body[`SKS-MK${i}`],
			};
			ipk += mappingNilai[body[`nilai-MK${i}`]] * body[`SKS-MK${i}`];
			jumlahSKS += Number(body[`SKS-MK${i}`]);
			nilaiObjs[`mk${i}`] = nilaiObj;
		}
		console.log(ipk);
		console.log(jumlahSKS);
		ipk = (ipk / jumlahSKS).toFixed(2);
		const dataToCreate = {
			ipk,
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
