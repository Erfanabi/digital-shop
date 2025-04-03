"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { Edit, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../services";

const ProductTable = (props: {
  products: Awaited<ReturnType<typeof getProducts>>;
}) => {
  const { products } = props;

  // const onDeleteProduct = (id: string) => {
  //delete
  // deleteProduct(id);
  // };

  return (
    <div className="mt-4 rounded-lg border border-gray-200 shadow-md">
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <h1 className="text-xl font-semibold">Products</h1>
        <Button asChild>
          <Link href="/dashboard/products/new">
            Add New Product
            <PlusCircle />
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.price}</TableCell>
              <TableCell className="text-center">{product.quantity}</TableCell>
              <TableCell className="text-center">
                <Image
                  src={product.images[0]?.image || "/assets/noImage.jpg"}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="m-auto rounded-full"
                />
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Button variant="ghost" asChild>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <Edit />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    // onClick={() => {
                    //   onDeleteProduct(product.id);
                    // }}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">{products.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
export default ProductTable;
