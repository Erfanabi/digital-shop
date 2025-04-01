import ProductList from "@/modules/products/components/ProductList";
import { DATA } from "@/modules/products/mock/products";

function ProductListView() {
  return (
    <div>
      <ProductList products={DATA} />
    </div>
  );
}

export default ProductListView;
