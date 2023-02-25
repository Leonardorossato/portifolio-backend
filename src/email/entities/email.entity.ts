import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 255, unique: true })
  email: string;
}
