import ProductDetail from "@/modules/products/components/ProductDetail";
import { DATA } from "@/modules/products/mock/products";

async function DynamicProductsPage({ params }: { params?: any }) {
  const { id } = await params;
  console.log(id);

  const product = DATA[id - 1];
  console.log({ product });

  return (
    <div>
      <ProductDetail {...product} />;
    </div>
  );
}

export default DynamicProductsPage;
