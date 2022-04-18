import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Association } from './Association'
import { Player } from './Player'

@Entity()
export class Person {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 25
    })
    firstName: string

    @Column({
        length: 25
    })
    lastName: string

    @ManyToOne(() => Association, (association) => association.persons)
    association: Association

    @OneToMany(()=> Player, player => player.team)
    players: Player[]

}