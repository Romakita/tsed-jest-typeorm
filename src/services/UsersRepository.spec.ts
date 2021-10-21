import {PlatformTest} from "@tsed/common";
import "@tsed/typeorm";
import {config} from "../config";
import {UsersRepository} from "./UsersRepository";
import {User} from "../domain/User";

describe("UsersRepository", () => {
  beforeEach(async () => {
    await PlatformTest.create(config);
  });
  afterEach(() => PlatformTest.reset());
  it("should insert a user", async () => {
    const repository = PlatformTest.get<UsersRepository>(UsersRepository);

    const user = new User({
      name: "test"
    });

    await repository.save(user);

    expect(!!await repository.find()).toEqual(true);
  });
});
