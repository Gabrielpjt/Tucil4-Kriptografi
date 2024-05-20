import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataSchema = Schema({
	nim: String,
	nama: String,
	mk1: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk2: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk3: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk4: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk5: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk6: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk7: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk8: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk9: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	mk10: {
		kode: String,
		namaMK: String,
		nilai: String,
		SKS: Number,
	},
	ipk: Number,
});

export default dataSchema;
