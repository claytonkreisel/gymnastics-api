import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Country } from './Country'
import { City } from './City'

@Entity()
export class State {
    
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

    @ManyToOne(() => Country, country => country.states)
    country: Country

    @OneToMany(() => City, city => city.state)
    cities: City[]

}