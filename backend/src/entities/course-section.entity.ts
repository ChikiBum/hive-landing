import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Course, EnhancedBaseEntity, Rating, Resourse } from 'src/entities';

@Entity()
export class CourseSection extends EnhancedBaseEntity {
  @Column()
  description: string;

  @Column()
  'Q&A': string;

  @Column()
  video: string;

  @OneToMany(() => Resourse, (resourse) => resourse.courseSection)
  resourses: Resourse[];

  @OneToMany(() => Rating, (rating) => rating.courseSection)
  review: Rating[];

  @ManyToOne(() => Course, (course) => course.content, { onDelete: 'CASCADE' })
  @JoinColumn()
  course: Course;
}
