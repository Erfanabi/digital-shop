import ProductTable from "../components/ProductTable";
import { getProducts } from "../services";

async function ProductDashboardView() {
  // fetch data in server components
  const products = await getProducts();

  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductDashboardView;
