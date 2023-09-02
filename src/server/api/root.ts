import { exampleRouter } from "~/server/api/routers/example";
import { searchRouter } from "~/server/api/routers/search";
import { createTRPCRouter } from "~/server/api/trpc";
import { favoritePlacesRouter } from "./routers/favoritePlaces";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  search: searchRouter, // coinspotter.com/api/auth
  favplaces: favoritePlacesRouter, // coinspotter.com/api/auth
});

// export type definition of API
export type AppRouter = typeof appRouter;
