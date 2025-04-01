async function DynamicProductsPage({ params }: { params?: any }) {
  const { id } = await params;

  console.log(id);

  return <div>DynamicProductsPage</div>;
}

export default DynamicProductsPage;
