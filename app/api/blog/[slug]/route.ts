import { httpFetch } from "@/lib/utils";
import { NextResponse } from "next/server";
import { plausibleConfig } from "@/constants/site";

export async function GET(_: Request, { params }: RouterContext) {
  try {
    const { slug } = params;
    const data = await httpFetch<{
      results: {
        visitors: {
          value: number;
        };
      };
    }>(
      `${plausibleConfig.customDomain}/api/v1/stats/aggregate?site_id=${plausibleConfig.domain}&filters=event:page%3D%3D%2Fblog%2F${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
        },
        next: { revalidate: 300 },
      }
    );

    return NextResponse.json({ views: data.results.visitors.value });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
