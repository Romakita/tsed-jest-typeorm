import {EntityRepository, Repository} from "typeorm";
import {User} from "../domain/User";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

}
