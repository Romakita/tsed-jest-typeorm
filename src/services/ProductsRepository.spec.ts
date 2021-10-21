import {PlatformTest} from "@tsed/common";
import "@tsed/typeorm";
import {config} from "../config";
import {Product} from "../domain/Product";
import {ProductsRepository} from "./ProductsRepository";

describe("ProductsRepository", () => {
  beforeEach(async () => {
    await PlatformTest.create(config);
  });
  afterEach(() => PlatformTest.reset());
  it("should insert a user", async () => {
    const repository = PlatformTest.get<ProductsRepository>(ProductsRepository);

    for (let i = 0; i < 100; i++) {
      const product = new Product({
        name: "test" + i
      });

      await repository.save(product);
    }

    expect(!!await repository.find()).toEqual(true);
  });

  it("should insert a user (2)", async () => {
    const repository = PlatformTest.get<ProductsRepository>(ProductsRepository);

    for (let i = 0; i < 1000; i++) {
      const product = new Product({
        name: "test" + i
      });

      await repository.save(product);
    }

    expect(!!await repository.find()).toEqual(true);
  });
});
