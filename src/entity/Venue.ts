import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { City } from './City'
import { Organization } from './Organization'
import { Meet } from './Meet'

@Entity()
export class Venue {
    
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

    @ManyToOne(() => City, city => city.venues)
    city: City

    @OneToMany(() => Organization, organization => organization.venue)
    homeVenues: Organization[]

    @OneToMany(() => Meet, meet => meet.season)
    meets: Meet[]
}