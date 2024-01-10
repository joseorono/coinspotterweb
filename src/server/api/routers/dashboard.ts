import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const dashboardRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hola ${input.text}`,
      };
    }),

    exampleFernando: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      const theExample: any = {
        id: 1,
        name: "Fernando",
      };
      return theExample;
    }),


  getSecretMessage: protectedProcedure.query(() => {
    return "Ahora puedes ver este mensaje secreto";
  }),
});
