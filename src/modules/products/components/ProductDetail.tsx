"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
// import { ProductsWithImages } from '@/types';
// import { useCart } from '@/hooks/useCart';

export default function ProductDetail(product: any) {
  // const { addToCartMutation } = useCart();

  return (
    <div className="container mx-auto py-10">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{product?.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {product?.images?.length > 0 ? (
                <Image
                  src={product?.images[0].image}
                  alt={product?.name}
                  width={500}
                  height={500}
                  quality={50}
                  property="1"
                  className="rounded-lg"
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-200">
                  No Image Available
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-xl font-semibold">
                ${product?.price?.toFixed(2)}
              </p>
              <p className="text-gray-700">quantity: {product?.quantity}</p>
              <p className="mt-2 text-sm">Category: {product?.category}</p>
              <p className="line-clamp text-gray-600">
                {product?.description || "No description available."}
              </p>

              <Button
                className="my-4"
                // onClick={() => addToCartMutation.mutate(product.id)}
              >
                Add to cart
                <ShoppingCart />
              </Button>

              <Button variant="secondary" asChild>
                <Link href="/products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
