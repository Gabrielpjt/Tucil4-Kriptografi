import mongoose from 'mongoose';
import dataSchema from './dataSchema';

const NilaiPlain =
	mongoose.models.nilaiplaintexts ||
	mongoose.model('nilaiplaintexts', dataSchema);

export default NilaiPlain;
