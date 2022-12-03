import { rest } from "msw";
import { UserCredentials, UserRegisterCredentials } from "../types/types";
import { mockReviews } from "./review/mockReview";
import { mockReviewList } from "./review/mockReviewList";

const url = process.env.REACT_APP_API_URL;
const { _id } = mockReviews[0];

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

  rest.get(`${url}reviews`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockReviewList));
  }),

  rest.get(`${url}reviews`, async (req, res, ctx) => {
    return res.once(
      ctx.status(404),
      ctx.json({ error: "Esta película aún no tiene reseñas." })
    );
  }),

  rest.delete(`${url}reviews/delete/${_id}`, async (req, res, ctx) => {
    return res.once(ctx.status(200));
  }),
  rest.delete(`${url}reviews/delete/${_id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No puedes borrar en estos momentos!" })
    );
  }),
];
