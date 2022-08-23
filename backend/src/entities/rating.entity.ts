import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EnhancedBaseEntity, Student, CourseSection } from 'src/entities';

@Entity()
export class Rating extends EnhancedBaseEntity {
  @Column()
  mark: number;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Student, (student) => student.review, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: Student;

  @ManyToOne(() => CourseSection, (courseSection) => courseSection.review, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  courseSection: CourseSection;
}
