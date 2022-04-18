import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { State } from './State'
import { Venue } from './Venue'

@Entity()
export class City {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 80
    })
    name: string

    @Column({
        length: 25
    })
    shortName: string

    @Column({
        length: 8
    })
    abbr: string

    @ManyToOne(() => State, state => state.cities)
    state: State

    @OneToMany(() => Venue, venue => venue.city)
    venues: Venue[]

}