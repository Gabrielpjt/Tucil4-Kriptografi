import mongoose from 'mongoose';
import dataSchema from './dataSchema';

const NilaiPlain =
	mongoose.models.NilaiPlaintexts ||
	mongoose.model('nilaiplaintexts', dataSchema);

export default NilaiPlain;
