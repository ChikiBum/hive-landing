import { EnhancedBaseEntity } from 'src/entities';
import { Column } from 'typeorm';

// instructor and student depend on it
export class ProfileInfo extends EnhancedBaseEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  passwordHash: string;

  @Column({ nullable: true })
  headline: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ nullable: true })
  biography: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  linkedLn: string;

  @Column({ nullable: true })
  discord: string;

  @Column({ nullable: true })
  instagram: string;
}
