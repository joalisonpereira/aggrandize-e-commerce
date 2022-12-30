import { Request, Response } from "express";
import dummyJsonService from "src/services/dummy-json.service";
import * as Calc from "numeral-calc";
import { Product } from "src/common/types";
import { PRODUCT_CATEGORIES } from "src/common/constants";

class ProductsController {
  async index(req: Request, res: Response) {
    const fields = [
      "id",
      "thumbnail",
      "title",
      "price",
      "rate",
      "category",
      "discountPercentage",
    ];

    const { data } = await dummyJsonService.get<{ products: Product[] }>(
      "/products",
      { params: { ...req.query, select: fields.join(",") } }
    );

    let products = data.products;

    // .filter((item) =>
    //   [PRODUCT_CATEGORIES.mensShirts].includes(item.category)
    // );

    products = data.products.map((item) => {
      const discountRate = +Calc.divide(item.discountPercentage, 100);

      const discountValue = +Calc.multi(item.price, discountRate);

      return {
        ...item,
        priceWithDiscount: +Calc.sub(item.price, discountValue),
      };
    });

    return res.send(products);
  }
}

export default ProductsController;
