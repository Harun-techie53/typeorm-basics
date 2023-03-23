import {
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	Entity,
	ManyToOne,
	JoinColumn,
	Relation,
	DeepPartial,
} from 'typeorm';
import Client from './Client.js';

export enum TransactionType {
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw',
}

@Entity('transaction')
export default class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'enum',
		enum: TransactionType,
	})
	type: string;

	@Column({
		type: 'numeric',
	})
	amount: number;

	@ManyToOne(() => Client, (client) => client.transactions)
	@JoinColumn({
		name: 'client_id',
	})
	client: Client | null;
}
