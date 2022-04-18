import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm'
import { Team } from './Team'
import { Meet } from './Meet'

@Entity()
export class MeetTeam {
    
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Team, team => team.meetTeams)
    @JoinColumn()
    team: Team

    @ManyToOne(() => Meet, meet => meet.meetTeams)
    @JoinColumn()
    meet: Meet

    @Column({
        type: "boolean",
        default: false
    })
    host: boolean

}