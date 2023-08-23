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

      const productos = await prisma.$queryRaw`
        SELECT * FROM Producto
        WHERE LOWER(nombre) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const places = await prisma.$queryRaw`
        SELECT * FROM Places
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(address) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      const paymentMethodsAccepted = await prisma.$queryRaw`
        SELECT * FROM payment_methods_accepted
        WHERE paymethod_id IN (
          SELECT id FROM payment_methods
          WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
        )
      `;

      const paymentMethods = await prisma.$queryRaw`
        SELECT * FROM payment_methods
        WHERE LOWER(name) LIKE LOWER(CONCAT('%', ${query}, '%'))
          OR LOWER(symbol) LIKE LOWER(CONCAT('%', ${query}, '%'))
      `;

      res.status(200).json({ productos, places, paymentMethodsAccepted, paymentMethods });
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