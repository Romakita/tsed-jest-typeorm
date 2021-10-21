import {User} from "../../domain/User";
import {Product} from "../../domain/Product";

export const typeormConfig = [
  {
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "synchronize": true,
    "logging": false,
    "entities": [
      User,
      Product
    ],
    "migrations": [
      "${rootDir}/migration/**/*.{js,ts}"
    ],
    "subscribers": [
      "${rootDir}/subscriber/**/*.{js,ts}"
    ],
    "cli": {
      "entitiesDir": "${rootDir}/entity",
      "migrationsDir": "${rootDir}/migration",
      "subscribersDir": "${rootDir}/subscriber"
    }
  }
] as any;
