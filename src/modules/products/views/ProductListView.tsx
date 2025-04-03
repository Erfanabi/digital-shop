import ProductList from "@/modules/products/components/ProductList";
import { getProducts } from "@/modules/products/services";

async function ProductListView() {
  const products = await getProducts();

  return <ProductList products={products} />;
}

export default ProductListView;
