import mongoose from 'mongoose';

async function connect() {
	try {
		if (mongoose.connection.readyState === 0) {
			await mongoose.connect(process.env.MONGODB_URI);
		}
	} catch (error) {
		console.error('error:', error);
	}
}

export default connect;
