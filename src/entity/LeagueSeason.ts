import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { League } from './League'
import { Season } from './Season'
import { StandingsType } from '../bin/enums'
import { Team } from './Team'
import { Meet } from './Meet'

@Entity()
export class LeagueSeason {
    
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

    @Column({
        type: "enum",
        enum: StandingsType,
        default: StandingsType.WIN_LOSS
    })
    standingsType: StandingsType

    @ManyToOne(() => League, (league) => league.leagueSeasons)
    league: League

    @ManyToOne(() => Season, (season) => season.leagueSeasons)
    season: Season

    @OneToMany(()=> Team, team => team.leagueSeason)
    teams: Team[]

    @OneToMany(() => Meet, meet => meet.season)
    meets: Meet[]

}