//import { Post, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "../../../prisma/generated/prisma-client-js";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      const producto = await prisma.$queryRaw`
        SELECT * FROM producto
        WHERE LOWER(nombre) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const places = await prisma.$queryRaw`
        SELECT * FROM Places
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(address) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const picture_places = await prisma.$queryRaw`
        SELECT * FROM picture_places
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(address) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const payment_Methods_Accepted = await prisma.$queryRaw`
        SELECT * FROM PaymentMethodsAccepted
        WHERE paymethod_id IN (
          SELECT id FROM PaymentMethods
          WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
        )
      `;

      const currencies = await prisma.$queryRaw`
        SELECT * FROM Currencies
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(symbol) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const payment_Methods = await prisma.$queryRaw`
        SELECT * FROM PaymentMethods
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(symbol) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      res.status(200).json({ producto, places, picture_places, payment_Methods_Accepted, currencies, payment_Methods });
    } catch (error: any) {
      console.error(error);
      res.status(500).end();
    }
  }
}


/*
====================================
busqueda de user and post realizados 
====================================
*/

/*
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      /**
       * Search posts
       */

/*
const posts: Array<Post & { author: User }> = await prisma.post.findMany({
  where: {
    OR: [
      {
        body: {
          contains: query,
          mode: "insensitive",
        },
      },
      {
        author: {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
    ],
  },
  include: {
    author: true,
  },
});

/**
 * Save search
 */

/*
await prisma.searchQuery.create({
  data: {
    query,
  },
});

res.status(200).json({ posts });
} catch (error: any) {
console.log(error);
res.status(500).end();
}
}
} */