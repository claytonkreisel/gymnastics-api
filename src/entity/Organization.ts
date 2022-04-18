import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import {League} from "./League"
import {Association} from "./Association"
import {Team} from "./Team"
import {Venue} from "./Venue"

@Entity()
export class Organization {
    
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

    @Column({
        length: 6
    })
    primaryColor: string

    @Column({
        length: 6
    })
    secondaryColor: string

    @ManyToOne(() => Venue, (venue) => venue.homeVenues)
    venue: Venue

    @ManyToOne(() => League, (league) => league.currentOrganizations)
    currentLeague: League

    @ManyToOne(() => Association, (association) => association.organizations)
    association: Association

    @OneToMany(()=> Team, team => team.organization)
    teams: Team[]

}