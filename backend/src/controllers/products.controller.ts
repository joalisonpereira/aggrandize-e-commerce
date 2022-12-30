import { Request, Response } from "express";
import dummyJsonService from "src/services/dummy-json.service";
import * as Calc from "numeral-calc";
import { Product } from "src/common/types";
import {
  MAX_DISCOUNT_PERCENTAGE,
  MIN_STOCK_COUNT,
  PRODUCT_CATEGORIES,
} from "src/common/constants";

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
      "stock",
    ];

    const { data } = await dummyJsonService.get<{ products: Product[] }>(
      "/products",
      { params: { ...req.query, select: fields.join(",") } }
    );

    //Filter by category and stock rules
    let products = data.products.filter(
      (item) =>
        PRODUCT_CATEGORIES.includes(item.category) &&
        item.stock >= MIN_STOCK_COUNT
    );

    //Calc discount
    products = products.map((item) => {
      const discountValue = Math.min(
        item.discountPercentage,
        MAX_DISCOUNT_PERCENTAGE
      );

      const discountDecimal = +Calc.divide(discountValue, 100);

      const finalDiscount = +Calc.multi(item.price, discountDecimal);

      return {
        ...item,
        priceWithDiscount: +Calc.sub(item.price, finalDiscount),
      };
    });

    return res.send(products);
  }
}

export default ProductsController;
