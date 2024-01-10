import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const blogRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hola ${input.text}`,
      };
    }),

    getRecentPosts: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.blogPost.findMany();
    }),

    getPostById: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(({ ctx, input }) => {
        return ctx.prisma.blogPost.findUnique({
            where: { id: input.postId },
        });
    }),

});

