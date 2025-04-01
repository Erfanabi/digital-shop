import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
import React from "react";

const Ads: React.FC = () => {
  return (
    <Card className="flex w-3/4 items-center justify-between">
      <div>
        <CardHeader>
          <CardTitle>on Sale products</CardTitle>

          <CardDescription>
            Buy outdated products with 50% discount
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button>Buy Now</Button>
        </CardFooter>
      </div>

      <Image
        src="/assets/ads.jpg"
        width={300}
        height={200}
        alt="ads"
        className="rounded-br-lg rounded-tr-lg"
      />
    </Card>
  );
};

export default Ads;
