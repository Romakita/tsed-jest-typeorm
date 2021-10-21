import {Format, Groups, JsonFormatTypes} from "@tsed/schema";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "products", synchronize: true})
export class Product {
  @PrimaryGeneratedColumn("uuid")
  @Groups("!create")
  @Format(JsonFormatTypes.UUID)
  id: string;

  @Column({name: "name"})
  name: string;

  constructor({id, name}: Partial<Product> = {}) {
    Object.assign(this, {
      id,
      name
    });
  }
}
