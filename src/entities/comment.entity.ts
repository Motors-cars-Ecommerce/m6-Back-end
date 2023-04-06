import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import Car from "./car.entity";
import User from "./user.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => Car, (car) => car.comments)
  car: Car;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}

export default Comment;
