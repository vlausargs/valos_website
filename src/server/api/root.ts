import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { postRouter } from "./routers/post";
import { tagRouter } from "./routers/tag";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  post: postRouter,
  tag: tagRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
