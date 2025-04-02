import ProductList from "@/modules/products/components/ProductList";
import { DATA } from "@/modules/products/mock/products";
import { prisma, PrismaType } from "@/lib/prisma";

async function ProductListView() {

  const data: PrismaType.Product[] = await prisma.product.findMany();
  console.log(data);

  // const [products, setProducts] = useState<any[]>([]);
  //
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const result = await prisma.product.findMany({
  //       include: { images: true },
  //     });
  //     setProducts(result);
  //   };
  //
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <ProductList products={DATA} />
    </div>
  );
}

export default ProductListView;
