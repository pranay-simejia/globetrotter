import { BaseEntity as TypeormBaseEntity } from 'typeorm';
export declare abstract class BaseEntity extends TypeormBaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
