"use client"

import ProductList from "@/modules/products/components/ProductList";
import { getProducts, getProductsAPI } from "@/modules/products/services";
import { useEffect, useState } from "react";
import { ProductsWithImages } from "@/types";

function ProductListView() {
  // const products = await getProducts();

  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getProductData = async () => {
    const result = await getProductsAPI();
    setProducts(result?.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  console.log({ products });

  return <ProductList products={products} />;
}

export default ProductListView;
