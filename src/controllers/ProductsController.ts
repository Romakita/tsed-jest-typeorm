import {Controller, Get, Inject} from "@tsed/common";
import {ProductsRepository} from "../services/ProductsRepository";

@Controller("/products")
export class ProductsController {
  @Inject()
  protected repository: ProductsRepository;

  @Get("/")
  getAll() {
    return this.repository.find();
  }
}
