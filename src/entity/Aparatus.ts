import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Score } from './Score'

@Entity()
export class Aparatus {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 30
    })
    name: string

    @Column({
        length: 8
    })
    shortName: string

    @OneToMany(() => Score, score => score.aparatus)
    scores: Score[]

}