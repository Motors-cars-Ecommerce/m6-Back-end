import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import User from "./user.entity";
import ModelsCar from "./modelCar.entity";
import Image from "./image.entity";
import Comment from "./comment.entity";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  km: number;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @ManyToOne(() => ModelsCar, (model) => model.cars)
  model_car: ModelsCar;

  @OneToMany(() => Image, (image) => image.car)
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.car)
  @JoinColumn()
  comments: Comment[];
}

export default Car;
