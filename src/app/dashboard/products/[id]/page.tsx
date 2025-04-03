import ProductDetailView from "@/modules/products/views/ProductDetailView";
import React, { Suspense } from "react";

const DashboardProductDynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const data = await params;
  const { id } = data;

  return (
    <div>
      <Suspense fallback={<p>Loadings</p>}>
        <ProductDetailView id={id} />
      </Suspense>
    </div>
  );
};

export default DashboardProductDynamicPage;
