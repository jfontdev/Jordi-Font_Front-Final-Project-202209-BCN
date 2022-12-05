import { rest } from "msw";
import { Review } from "../redux/features/reviewsSlice/types";
import { UserCredentials, UserRegisterCredentials } from "../types/types";
import { mockReviews } from "./review/mockReview";
import { mockReviewList } from "./review/mockReviewList";

const url = process.env.REACT_APP_API_URL;
const { _id } = mockReviews[0];

export const handlers = [
  rest.post(`${url}users/login`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();
    const { username } = user;
    if (username === "invalidUser") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Introduzca un usuario valido." })
      );
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

  rest.post(`${url}reviews/create`, async (req, res, ctx) => {
    const review = await req.json<Review>();
    return res.once(ctx.status(201), ctx.json({ review }));
  }),

  rest.post(`${url}reviews/create`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No puedes crear reseñas ahora mismo." })
    );
  }),

  rest.get(`${url}reviews/detail/${_id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(200),
      ctx.json({ review: mockReviews[0] })
    );
  }),

  rest.get(`${url}reviews/detail/${_id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(500),
      ctx.json({ error: "No podemos mostrar la reseña en estos momentos." })
    );
  }),
];
