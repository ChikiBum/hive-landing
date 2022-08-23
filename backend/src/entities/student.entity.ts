import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Course, Rating } from 'src/entities';
import { ProfileInfo } from './profile-info.entity';

@Entity()
export class Student extends ProfileInfo {
  @Column()
  wallet: string;

  @ManyToMany(() => Course, (course) => course.participants)
  @JoinTable()
  myCourses: Course[];

  @OneToMany(() => Rating, (rating) => rating.user)
  review: Rating[];
}
