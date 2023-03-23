import express from 'express';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

import ClientRouter from './routes/Client.js';
import BankerRouter from './routes/Banker.js';
import TransactionRouter from './routes/Transaction.js';

const app = express();
app.use(express.json());

app.use('/', ClientRouter);
app.use('/', BankerRouter);
app.use('/', TransactionRouter);

const main = async () => {
	try {
		await new DataSource({
			name: process.env.CONN_NAME,
			type: 'postgres',
			host: process.env.DATABASE_HOST,
			port: Number(String(process.env.DATABASE_PORT)),
			username: process.env.USERNAME,
			password: process.env.PASSWORD,
			database: process.env.DATABASE_NAME,
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

app.listen(process.env.APP_PORT, () =>
	console.log('App is running on port 8080')
);
