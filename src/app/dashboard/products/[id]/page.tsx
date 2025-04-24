import ProductDetailView from "@/modules/products/views/ProductDetailView";
import { Suspense } from "react";

const DashboardProductDynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<p>Loadings</p>}>
        <ProductDetailView id={id} />
      </Suspense>
    </div>
  );
};

export default DashboardProductDynamicPage;
