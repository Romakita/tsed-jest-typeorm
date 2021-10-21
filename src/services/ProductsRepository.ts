import {EntityRepository, Repository} from "typeorm";
import {Product} from "../domain/Product";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {

}
