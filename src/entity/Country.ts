import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from 'typeorm'
import { State } from './State'

@Entity()
export class Country {
    
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

    @Column("text")
    flag: string

    @Column({
        length: 2,
        unique: true
    })
    @Index({unique: true})
    alpha2: string

    @Column({
        length: 3,
        unique: true
    })
    @Index({unique: true})
    alpha3: string

    @Column({
        length: 3,
        unique: true
    })
    @Index({unique: true})
    un: string

    @OneToMany(() => State, state => state.country)
    states: State[]

}