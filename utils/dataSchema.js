import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataSchema = Schema({
	nim: String,
	nama: String,
	mk1: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk2: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk3: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk4: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk5: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk6: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk7: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk8: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk9: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	mk10: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: String,
	},
	ipk: String,
	tandatangan: String,
});

export default dataSchema;
