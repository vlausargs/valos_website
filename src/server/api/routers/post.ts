import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  postMessage: publicProcedure
    .input(
      z.object({
        content: z.string(),
        title: z.string(),
        tag: z.array(
          z.object({
            id: z.union([z.string(), z.undefined()]),
            desc: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.post.create({
          data: {
            content: input.content,
            title: input.title,
            tag: {
              connectOrCreate: input.tag.map((obj) =>
                obj.id !== undefined
                  ? {
                      where: {
                        id: obj.id,
                      },
                      create: {
                        desc: obj.desc,
                      },
                    }
                  : {
                      where: {
                        id: undefined,
                        desc: obj.desc,
                      },
                      create: {
                        desc: obj.desc,
                      },
                    }
              ),
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({ include: { tag: true } });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
