import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Organization } from './Organization'
import { LeagueSeason } from './LeagueSeason'
import { Season } from './Season'
import { Player } from './Player'
import { MeetTeam } from './MeetTeam'

@Entity()
export class Team {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 80
    })
    formalName: string

    @Column({
        length: 40
    })
    commonName: string

    @Column({
        length: 15
    })
    nickName: string

    @Column({
        length: 30
    })
    mascot: string

    @Column("text")
    logoUrl: string

    @ManyToOne(() => Organization, (organization) => organization.teams)
    organization: Organization

    @ManyToOne(() => LeagueSeason, (leagueSeason) => leagueSeason.teams)
    leagueSeason: LeagueSeason

    @ManyToOne(() => Season, (season) => season.teams)
    season: Season

    @OneToMany(() => MeetTeam, meetTeam => meetTeam.team)
    meetTeams: MeetTeam[]

    @OneToMany(()=> Player, player => player.team)
    players: Player[]

}