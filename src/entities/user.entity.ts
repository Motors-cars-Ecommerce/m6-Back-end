import { hashSync } from "bcryptjs";
import Address from "./address.entity";
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Car from "./car.entity";
import Comment from "./comment.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 14 })
  phone: string;

  @Column()
  birthday: Date;

  @Column({ default: false })
  seller: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
  
  @OneToMany(() => Address, (address) => address.user)
  address: Address[];

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @JoinColumn()
  comments: Comment[];
}

export default User;
