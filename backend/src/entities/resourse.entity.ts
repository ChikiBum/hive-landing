import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseSection, EnhancedBaseEntity } from 'src/entities';

@Entity()
export class Resourse extends EnhancedBaseEntity {
  @Column()
  wallet: string;

  @ManyToOne(() => CourseSection, (courseSection) => courseSection.resourses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  courseSection: CourseSection;
}
