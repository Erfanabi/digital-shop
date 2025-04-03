import React from "react";
// import { DATA } from "../mock/products";
import ProductItem from "./ProductItem";
// import { PrismaType } from "@/lib/prisma";
import { ProductsWithImages } from "@/types";

// import { ProductsWithImages } from "@/types";

function productList(props: { products: ProductsWithImages[] }) {
  const { products } = props;

  return (
    <div className="my-10 flex w-full flex-wrap items-center justify-between">
      {products?.map((item: any) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
