import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Meet } from './Meet'
import { Score } from './Score'

@Entity()
export class Rotation {
    
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Meet, meet => meet.rotations, {
        nullable: false
    })
    meet: Meet

    @OneToMany(() => Score, score => score.rotation)
    scores: Score[]

    @Column("int", {
        width: 1,
        default: 1,
        nullable: false
    })
    slot: number

}