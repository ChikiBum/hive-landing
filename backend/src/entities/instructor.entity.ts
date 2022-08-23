import { Column, Entity, OneToMany } from 'typeorm';
import { Course } from 'src/entities';
import { ProfileInfo } from './profile-info.entity';

@Entity()
export class Instructor extends ProfileInfo {
  @Column()
  wallet: string;

  @OneToMany(() => Course, (course) => course.owner)
  courses: Course[];
}
