import {Controller, Get, Inject} from "@tsed/common";
import {UsersRepository} from "../services/UsersRepository";

@Controller("/users")
export class UsersController {
  @Inject()
  protected repository: UsersRepository;

  @Get("/")
  getAll() {
    return this.repository.find();
  }
}
