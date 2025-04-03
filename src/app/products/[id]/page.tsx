import ProductDetail from "@/modules/products/components/ProductDetail";
import { getProductById } from "@/modules/products/services";
import { ProductsWithImages } from "@/types";

async function DynamicProductsPage({ params }: { params?: any }) {
  const { id } = await params;

  const product = await getProductById(id) as ProductsWithImages;

  console.log({ product });

  return (
    <div>
      <ProductDetail {...product} />;
    </div>
  );
}

export default DynamicProductsPage;
