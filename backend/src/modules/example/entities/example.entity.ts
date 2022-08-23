import { Entity } from 'typeorm';
import { EnhancedBaseEntity } from 'src/entities';

@Entity()
export class Example extends EnhancedBaseEntity {}
