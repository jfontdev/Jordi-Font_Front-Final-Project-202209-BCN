import { rest } from "msw";
import { UserCredentials, UserRegisterCredentials } from "../types/types";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}users/login`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();
    if (!user) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.json({ token: "token" }));
  }),

  rest.post(`${url}users/register`, async (req, res, ctx) => {
    const user = await req.json<UserRegisterCredentials>();
    const { username } = user;
    if (username === "user5") {
      return res(ctx.status(409), ctx.json({ error: "Usuario ya registrado" }));
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),
];
