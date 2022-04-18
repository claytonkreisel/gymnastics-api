import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Person } from './Person'
import { Team } from './Team'
import { PlayerClassType } from '../bin/enums'
import { Score } from './Score'

@Entity()
export class Player {
    
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Person, (person) => person.players)
    person: Person

    @ManyToOne(() => Team, (team) => team.players)
    team: Team

    @OneToMany(() => Score, score => score.player)
    scores: Player[]

    @Column({
        type: "enum",
        enum: PlayerClassType,
        default: PlayerClassType.FRESHMAN
    })
    class: PlayerClassType

}