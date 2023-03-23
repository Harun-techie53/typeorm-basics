import { DataSource } from 'typeorm';
import Client from './entities/Client';
import * as dotenv from 'dotenv';
dotenv.config();

const main = async () => {
	try {
		await new DataSource({
			name: process.env.CONN_NAME,
			type: 'postgres',
			host: process.env.HOST,
			port: Number(String(process.env.PORT)),
			username: process.env.USERNAME,
			password: process.env.PASSWORD,
			database: process.env.DATABASE,
			entities: ['./src/entities/**/*.ts'],
			synchronize: true,
		}).initialize();

		console.log('Connected to DB!');
	} catch (error) {
		console.error(error);
		console.log('Unable to connect to DB!');
	}
};

main();
