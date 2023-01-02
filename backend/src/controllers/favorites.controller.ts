import { Request, Response } from "express";

class FavoritesController {
  async index(req: Request, res: Response) {
    return res.status(200).send(req.session.favorites ?? []);
  }

  async store(req: Request, res: Response) {
    const { id } = req.body;

    const favorites = [...(req.session.favorites ?? []), Number(id)];

    req.session.favorites = Array.from(new Set(favorites));

    return res.status(201).send(req.session.favorites);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const favorites = req.session.favorites?.filter(
      (favId) => favId !== Number(id)
    );

    req.session.favorites = favorites;

    return res.status(200).send(req.session.favorites);
  }
}

export default FavoritesController;
