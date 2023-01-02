import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "src/lib/get-session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);

  if (req.method === "GET") {
    return res.send(session.favorites ?? []);
  }

  if (req.method === "POST") {
    const newFavorites = [...(session.favorites ?? []), Number(req.body.id)];

    session.favorites = Array.from(new Set(newFavorites));

    return res.status(201).send(session.favorites);
  }

  return res.send("Method not allowed");
}
