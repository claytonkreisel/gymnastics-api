import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {Person} from "./Person"
import {Season} from "./Season"
import {Organization} from "./Organization"
import {League} from "./League"

@Entity()
export class Association {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 60
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

    @OneToMany(()=> Person, person => person.association)
    persons: Person[]

    @OneToMany(()=> Season, season => season.association)
    seasons: Season[]

    @OneToMany(()=> Organization, organization => organization.association)
    organizations: Organization[]

    @OneToMany(()=> League, league => league.association)
    leagues: League[]

}