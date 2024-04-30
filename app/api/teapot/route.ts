export const runtime = "edge";

export async function GET() {
  return Response.json(
    { message: "I'm a teapot", status: 418 },
    { status: 418 },
  );
}
