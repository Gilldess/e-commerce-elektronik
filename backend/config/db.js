import mongoose from 'mongoose';

export const connectDB = async () => {
	await mongoose
		.connect(
			'mongodb+srv://luaygitaris:user123@cluster0.jp6a5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
		)
		.then(() => console.log('DB Connected'));
};
