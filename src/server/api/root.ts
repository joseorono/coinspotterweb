import { exampleRouter } from "~/server/api/routers/example";
import { searchRouter } from "~/server/api/routers/search";
import { createTRPCRouter } from "~/server/api/trpc";
import { placesRouter } from "./routers/places";
import { dashboardRouter } from "~/server/api/routers/dashboard";
import { blogRouter } from "~/server/api/routers/blog";
import { favoritesRouter } from "./routers/favorites";
import { picturePlacesRouter } from "./routers/picture_places";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  search: searchRouter, // coinspotter.com/api/auth
  places: placesRouter,
  dashboard: dashboardRouter,
  blog: blogRouter,
  favorites: favoritesRouter,
  picture_places: picturePlacesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
