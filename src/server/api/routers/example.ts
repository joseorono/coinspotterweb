import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hola ${input.text}`,
      };
  }),


  getSecretMessage: protectedProcedure.query(() => {
    return "Ahora puedes ver este mensaje secreto!";
  }),

  getLoggedUser: protectedProcedure.query(() => {
    return "Ha iniciado sesión!";
  }),
});
