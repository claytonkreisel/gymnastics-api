import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { Aparatus } from './Aparatus'
import { Rotation } from './Rotation'
import { NumericTransformer } from '../bin/transformers'
import { Player } from './Player'

@Entity()
export class Score {
    
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Rotation, rotation => rotation.scores, {
        nullable: false
    })
    rotation: Rotation

    @ManyToOne(() => Aparatus, aparatus => aparatus.scores, {
        nullable: false
    })
    aparatus: Aparatus

    @ManyToOne(() => Player, player => player.scores, {
        nullable: false
    })
    player: Player

    @Column("numeric", {
        precision: 6,
        scale: 4,
        transformer: new NumericTransformer(),
        default: 0
    })
    value: number

}