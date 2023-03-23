import express from 'express';
import Client from '../entities/Client.js';

const router = express.Router();

router.post('/api/client', async (req, res) => {
	try {
		const client = Client.create(req.body);

		await client.save();
		res.status(200).json(client);
	} catch (error) {
		console.error(error);
	}
});

export default router;
