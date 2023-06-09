import {
	Entity,
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
class Person extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({
		unique: true,
		length: 10,
	})
	card_number: string;

	@Column({
		type: 'numeric',
		default: 0,
	})
	balance: number;
}

export default Person;
