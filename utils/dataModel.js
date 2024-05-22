import mongoose from 'mongoose';
import dataSchema from './dataSchema';

const Nilai = mongoose.models.nilai || mongoose.model('nilai', dataSchema);

export default Nilai;
