import { allBlogs } from "@/.contentlayer/generated";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: RouterContext) {
  try {
    const { slug } = params;
    if (!slug) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    const data = await prisma.blogViews.findFirst({
      where: {
        slug,
      },
      select: {
        views: true,
      },
    });

    if (!data) {
      if (allBlogs.find((post) => post.slug === slug)) {
        return NextResponse.json({ views: 0 });
      } else {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
    } else {
      return NextResponse.json({ views: data.views });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(_: Request, { params }: RouterContext) {
  try {
    const { slug } = params;
    if (!slug) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    const data = await prisma.blogViews.findFirst({
      where: {
        slug,
      },
      select: {
        id: true,
        views: true,
      },
    });

    if (!data) {
      if (allBlogs.find((post) => post.slug === slug)) {
        await prisma.blogViews.create({
          data: {
            slug,
            views: 1,
          },
        });

        return NextResponse.json({ views: 1 });
      } else {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
    } else {
      await prisma.blogViews.update({
        where: {
          id: data.id,
        },
        data: {
          views: data.views + 1,
        },
      });

      return NextResponse.json({ views: data.views + 1 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
