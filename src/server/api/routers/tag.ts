import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tagRouter = createTRPCRouter({
  postTag: publicProcedure
    .input(z.object({ desc: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.tag.create({
          data: {
            desc: input.desc,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
