import {Format, Groups, JsonFormatTypes, Name} from "@tsed/schema";
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: "users", synchronize: true})
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Groups("!create")
  @Format(JsonFormatTypes.UUID)
  id: string;

  @Column({name: "name"})
  name: string;

  @CreateDateColumn({name: "created_at"})
  @Name("created_at")
  @Format("date-time")
  @Groups("!update", "!create")
  createdAt: Date;

  @UpdateDateColumn({name: "update_at"})
  @Name("update_at")
  @Format("date-time")
  @Groups("!update", "!create")
  updatedAt: Date;

  constructor({id, name, createdAt, updatedAt}: Partial<User> = {}) {
    Object.assign(this, {
      id,
      name,
      createdAt,
      updatedAt
    });
  }
}
