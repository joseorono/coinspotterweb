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

  insertFavorite: protectedProcedure

   .input(z.object({ placeId: z.string() }))
   .mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    //ToDo: ESTA CONDICIONAL HAY QUE REVISARLA DA ERROR EN PLACE_ID. De aqui al 35 es una condicional dañada.

    const existingRecord = await ctx.prisma.favorite_places.findFirst({
      where: {
        user_id: userId,
        place_id: input.placeId,
      },
    });

    if (existingRecord) {
      return {
        favorite: null,
        error: "el lugar ya esta en favoritos",
      };
    }

    const newFavorite = await ctx.prisma.favorite_places.create({
      data: {
        user_id: userId,
        place_id: input.placeId,
      },
    });

    return {
      favorite: newFavorite,
      error: null,
    };

  }),


  getFavorites:protectedProcedure.query(async({ ctx }) => {
    const userId = ctx.session.user.id;
    return await ctx.prisma.favorite_places.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }),

  

  toggleFavorite: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        user_id: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { id, user_id } }) => {
      return ctx.prisma.favorite_places.update({
        where: {
          id,
        },
        data: {
          user_id,
        },
      });
    }),
});
