import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { User } from "../types/types";

const userFactory = Factory.define<User>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(10),
  token: faker.random.alphaNumeric(10),
}));

export const getRandomUser = () => userFactory.build();
