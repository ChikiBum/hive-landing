import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EnhancedBaseEntity, Course } from 'src/entities';

@Entity()
export class Coupon extends EnhancedBaseEntity {
  @Column()
  discountRate: number;

  @Column()
  phrase: string;

  @ManyToOne(() => Course, (course) => course.coupons, { onDelete: 'CASCADE' })
  @JoinColumn()
  course: Course;
}
