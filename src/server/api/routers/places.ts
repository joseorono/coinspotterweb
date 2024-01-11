import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const placesRouter = createTRPCRouter({

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getPlaceById: publicProcedure
    .input(z.object({ placeId: z.string() }))
    .query(({ ctx, input }) => {
      
        return ctx.prisma.places.findUnique({
            where: { id: input.placeId },
        });
        
  }),

  searchPlaces: publicProcedure
  .input(z.object({ query: z.string() }))
  .query(async ({ input }) => {
    try {
      const { query } = input;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }


      const places = await prisma.$queryRaw`
        SELECT * FROM places
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(address) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(latitude) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(longitude) LIKE LOWER(CONCAT('%', ${query}, '%'))
        `;

      return {
        places
      };
    } catch (error: any) {
      console.error(error);
      throw new Error("Error en la búsqueda");
    }
  }),

});
