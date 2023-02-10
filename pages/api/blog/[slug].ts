import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import { allPosts } from "contentlayer/generated";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug?.toString();

  if (!slug) {
    return res.status(404).json({ message: "Not Found", code: res.statusCode });
  }

  if (req.method === "GET") {
    try {
      const data = await prisma.blogViews.findFirst({
        where: {
          slug: slug,
        },
        select: {
          slug: true,
          views: true,
        },
      });

      if (!data) {
        if (!allPosts.find((post) => post._raw.flattenedPath === slug)) {
          return res
            .status(404)
            .json({ message: "Not Found", code: res.statusCode });
        }

        const newData = await prisma.blogViews.create({
          data: {
            slug: slug,
            views: 0,
          },
          select: {
            slug: true,
            views: true,
          },
        });

        return res
          .status(201)
          .json({ message: "Created", data: newData, code: res.statusCode });
      }

      return res
        .status(200)
        .json({ message: "Success", data: data, code: res.statusCode });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  if (req.method === "PUT") {
    try {
      const dataToUpdate = await prisma.blogViews.findFirst({
        where: {
          slug: slug,
        },
        select: {
          id: true,
          views: true,
        },
      });

      if (!dataToUpdate) {
        return res
          .status(404)
          .json({ message: "Not Found", code: res.statusCode });
      }

      await prisma.blogViews.update({
        where: {
          id: dataToUpdate.id,
        },
        data: {
          views: dataToUpdate.views + 1,
        },
      });

      return res.status(204).end();
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
