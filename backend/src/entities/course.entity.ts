import {
  EnhancedBaseEntity,
  Student,
  Instructor,
  CourseSection,
  Coupon,
} from 'src/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Course extends EnhancedBaseEntity {
  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  category: string;

  @ManyToOne(() => Instructor, (instructor) => instructor.courses, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  owner: Instructor;

  @ManyToMany(() => Student, (student) => student.myCourses)
  participants: Student[];

  @OneToMany(() => CourseSection, (courseSection) => courseSection.course)
  content: CourseSection[];

  @Column()
  language: string;

  @Column()
  image: string;

  @Column()
  promoVideo: string;

  @Column()
  welcomeMsg: string;

  @Column()
  congratulationsMsg: string;

  @OneToMany(() => Coupon, (coupon) => coupon.course)
  coupons: Coupon[];

  @Column()
  videoDuration: string;
}
