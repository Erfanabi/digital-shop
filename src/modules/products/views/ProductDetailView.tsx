import { getProductById } from "../services";
import ProductForm from "@/modules/products/components/ProductForm";

async function ProductDetailView(props: { id: string }) {
  const { id } = props;

  // fetch in server components
  const product = await getProductById(id);

  return (
    <div>
      <ProductForm product={product} />
    </div>
  );
}

export default ProductDetailView;
