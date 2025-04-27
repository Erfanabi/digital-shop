"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "@/components/ui";
import { CircleX } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { PrismaType } from "@/lib/prisma";
import Spinner from "@/components/Spinner";
import {
  deleteImage,
  fetchImages,
  uploadImage,
} from "@/modules/products/services/images";

const UploadImage: FC<{ productId: string }> = ({ productId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<PrismaType.Image[] | null>(null);
  const [loading, setLoading] = useState(true);

  // true
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  // true
  const updateImageList = (imageId: string) => {
    setImages(preState => preState?.filter(img => img.id !== imageId) || null);
  };

  // true
  const handleDelete = async (imageId: string) => {
    setLoading(true);
    await deleteImage(imageId);
    updateImageList(imageId);
    setLoading(false);
  };

  // true
  const getImages = async () => {
    const data = await fetchImages(productId);
    setImages(data.images);
    setLoading(false);
  };

  // true
  const handleUpload = async () => {
    if (!file || !productId) {
      alert("please select a valid file and product");
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", productId);
      const { data } = await uploadImage(formData);
      setImages(data);
      setFile(null);
    }
  };

  useEffect(() => {
    getImages();
  }, [productId]);

  return (
    <div className="w-full">
      <Label htmlFor="picture"> Product Image</Label>
      <div className="flex w-full justify-between gap-2">
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
        <Button onClick={handleUpload}>Upload Image</Button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          {images?.map(item => {
            return (
              <div className="group relative" key={item.id}>
                <CircleX
                  className="absolute right-1 top-1 cursor-pointer p-1 text-red-500 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={() => handleDelete(item.id)}
                />
                <Image
                  width={100}
                  height={100}
                  alt="product image"
                  src={item.image}
                  className="mx-auto mt-4 rounded-md"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
