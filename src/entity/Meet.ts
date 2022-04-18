import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Season } from './Season'
import { LeagueSeason } from './LeagueSeason'
import { Venue } from './Venue'
import { MeetTeam } from './MeetTeam'
import { MeetStatus, MeetType} from '../bin/enums'
import { Rotation } from './Rotation'

@Entity()
export class Meet {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: MeetStatus,
        default: MeetStatus.SCHEDULED
    })
    status: MeetStatus

    @Column({
        type: "enum",
        enum: MeetType,
        default: MeetType.DUAL
    })
    type: MeetType

    @ManyToOne(() => Season, season => season.meets, {nullable: false})
    season: Season

    @ManyToOne(() => LeagueSeason, leagueSeason => leagueSeason.meets)
    leagueSeason: LeagueSeason

    @ManyToOne(() => Venue, venue => venue.meets)
    venue: Venue

    @OneToMany(() => MeetTeam, meetTeam => meetTeam.meet)
    meetTeams: MeetTeam[]

    @OneToMany(() => Rotation, rotation => rotation.meet)
    rotations: Rotation[]

    @Column("timestamp")
    startDateTime: Date
    

}