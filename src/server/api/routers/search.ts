import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
//import { PrismaClient } from "../../../../prisma/generated/prisma-client-js";

const prisma = new PrismaClient();

const propsHome: IPageLayoutComponentProps = {
  pageTitle: "Home",
  pageDescription: "Home page description",
  includeHero: true,
  useHomePageHeader: true,
};

export const searchRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      try {
        const { query } = input;

        if (typeof query !== "string") {
          throw new Error("Invalid request");
        }

        const producto = await prisma.$queryRaw`
        SELECT * FROM products
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

        const places = await prisma.$queryRaw`
        SELECT * FROM places
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(address) LIKE LOWER(CONCAT('%', ${query}, '%'))
        `;

        const picture_places = await prisma.$queryRaw`
          SELECT * FROM picture_places
          WHERE LOWER(place_id) LIKE LOWER(CONCAT('%', ${query}, '%'))
            OR LOWER(url) LIKE LOWER(CONCAT('%', ${query}, '%'))
        `;

        const payment_Methods_Accepted = await prisma.$queryRaw`
          SELECT * FROM payment_methods_accepted
          WHERE paymethod_id IN (
            SELECT id FROM payment_methods
            WHERE LOWER(paymethod_id) LIKE LOWER(CONCAT('%', ${query}, '%'))
          )
        `;

        const currencies = await prisma.$queryRaw`
          SELECT * FROM Currencies
          WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
            OR LOWER(symbol) LIKE LOWER(CONCAT('%', ${query}, '%'))
        `;

        const payment_Methods = await prisma.$queryRaw`
          SELECT * FROM payment_methods
          WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
            OR LOWER(symbol) LIKE LOWER(CONCAT('%', ${query}, '%'))
        `;

        return {
          producto,
          places,
          picture_places,
          payment_Methods_Accepted,
          currencies,
          payment_Methods,
        };
      } catch (error: any) {
        console.error(error);
        throw new Error("Error en la búsqueda");
      }
    }),
});
