import {
	Entity,
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToMany,
	JoinTable,
} from 'typeorm';
import Person from '../utils/Person.js';
import Client from './Client.js';

@Entity('banker')
export default class Banker extends Person {
	@Column({
		unique: true,
		length: 10,
	})
	employee_number: string;

	@ManyToMany(() => Client)
	@JoinTable({
		name: 'bankers_clients',
		joinColumn: {
			name: 'banker',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'client',
			referencedColumnName: 'id',
		},
	})
	clients: Client[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
