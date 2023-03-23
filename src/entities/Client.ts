import {
	Entity,
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
} from 'typeorm';
import Person from '../utils/Person.js';
import Transaction from './Tansaction.js';
import Banker from './Banker.js';

@Entity('client')
class Client extends Person {
	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number;
		hair_color: string;
	};

	@Column({
		type: 'simple-array',
		default: [],
	})
	family_members: string[];

	@Column({
		default: true,
	})
	is_active: boolean;

	@OneToMany(() => Transaction, (transaction) => transaction.client)
	transactions: Transaction[];

	@ManyToMany(() => Banker)
	bankers: Banker[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Client;
