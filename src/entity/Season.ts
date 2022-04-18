import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Association } from './Association'
import { LeagueSeason } from './LeagueSeason'
import { Team } from './Team'
import { Meet } from './Meet'

@Entity()
export class Season {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 11
    })
    displayName: string

    @Column("date")
    startDate: string

    @Column("date")
    endDate: string

    @ManyToOne(() => Association, (association) => association.organizations)
    association: Association

    @OneToMany(()=> LeagueSeason, leagueSeason => leagueSeason.league)
    leagueSeasons: LeagueSeason[]

    @OneToMany(()=> Team, team => team.season)
    teams: Team[]

    @OneToMany(() => Meet, meet => meet.season)
    meets: Meet[]

}