import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "src/lib/get-session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);

  if (req.method === "DELETE") {
    const favorites = session.favorites?.filter(
      (favId: number) => favId !== Number(req.query.id)
    );

    session.favorites = favorites;

    return res.send(session.favorites);
  }

  return res.send("Method not allowed");
}
