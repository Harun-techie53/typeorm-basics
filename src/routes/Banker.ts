import express from 'express';
import Banker from '../entities/Banker.js';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
	try {
		const banker = Banker.create(req.body);

		await banker.save();
		res.status(200).json(banker);
	} catch (error) {
		console.error(error);
	}
});

export default router;
