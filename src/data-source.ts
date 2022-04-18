import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { League } from "./entity/League"
import { Organization } from "./entity/Organization"
import { Person } from "./entity/Person"
import { Season } from "./entity/Season"
import { Association } from "./entity/Association"
import { LeagueSeason } from "./entity/LeagueSeason"
import { Team } from './entity/Team'
import { Player } from './entity/Player'
import { Country } from './entity/Country'
import { State } from './entity/State'
import { City } from './entity/City'
import { Venue } from './entity/Venue'
import { Meet } from './entity/Meet'
import { Aparatus } from './entity/Aparatus'
import { Rotation } from './entity/Rotation'
import { Score } from './entity/Score'
import { MeetTeam } from './entity/MeetTeam'

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "",
    port: (typeof process.env.DB_PORT != "undefined") ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER || "",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "",
    synchronize: true,
    logging: true,
    entities: [
        Aparatus,
        Association,
        City,
        Country,
        League,
        LeagueSeason,
        Meet,
        MeetTeam,
        Organization,
        Person,
        Player,
        Rotation,
        Score,
        Season,
        State,
        Team,
        Venue
    ],
    subscribers: [],
    migrations: [],
})