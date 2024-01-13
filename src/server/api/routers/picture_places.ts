import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const picturePlacesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hola ${input.text}`,
      };
    }),

  getPicturePlaceById: publicProcedure
    .input(z.object({ picturePlaceId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.picture_places.findMany({
        where: { place_id: input.picturePlaceId },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "Ahora puedes ver este mensaje secreto";
  }),
});
