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

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.example.findMany();
  }),

  insertFavorite: protectedProcedure

   .input(z.object({ placeId: z.string() }))
   .mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    //ToDo: ESTA CONDICIONAL HAY QUE REVISARLA DA ERROR EN PLACE_ID. De aqui al 35 es una condicional dañada.

    const existingFavorite = await ctx.prisma.favorite_places.findUnique({
      where: {        
          place_id : input.placeId,
          user_id: userId,
        
      },
    });

    if (existingFavorite) {
      return {
        error: "el lugar ya esta en favoritos",
      };
    }
   const newFavorite = await ctx.prisma.favorite_places.create({
      data: {
        place_id: input.placeId,
        user_id: userId,
      },
   });

   return newFavorite;

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
