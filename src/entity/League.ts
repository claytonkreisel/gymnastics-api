import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import {Organization} from "./Organization"
import {Association} from "./Association"
import {LeagueSeason} from "./LeagueSeason"

@Entity()
export class League {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 60
    })
    name: string

    @Column({
        length: 8
    })
    abbr: string

    @OneToMany(()=> Organization, organization => organization.currentLeague)
    currentOrganizations: Organization[]

    @OneToMany(()=> LeagueSeason, leagueSeason => leagueSeason.league)
    leagueSeasons: LeagueSeason[]

    @ManyToOne(() => Association, (association) => association.organizations)
    association: Association

}