import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: false})
    isTrainer: boolean;

    @Column({ default: null })
    trainerId: number;

    @Column({ default: true })
    isActive: boolean;
}