import express from 'express';
import Client from '../entities/Client.js';
import Transaction, { TransactionType } from '../entities/Tansaction.js';

const router = express.Router();

router.post('/api/client/transaction', async (req, res): Promise<any> => {
	try {
		const { amount, type, clientId } = req.body;

		const client = await Client.findOneBy({ id: parseInt(clientId) });

		if (!client) {
			return res.status(400).json({
				message: 'Client not found!',
			});
		}

		const transaction = Transaction.create({
			amount,
			type,
			client,
		});

		if (type === TransactionType.DEPOSIT) {
			client.balance += amount;
		} else if (type === TransactionType.WITHDRAW) {
			client.balance -= amount;
		}

		await transaction.save();
		await client.save();

		res.status(200).json({
			message: 'Transaction made successfully',
		});
	} catch (error) {
		console.error(error);
	}
});

export default router;
