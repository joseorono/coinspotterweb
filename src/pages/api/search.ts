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

      res.status(200).json({ productos });
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