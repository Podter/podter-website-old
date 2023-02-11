import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(418).json({ message: "I'm a teapot", code: res.statusCode });
}
