/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - Made the column `price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "price" DROP DEFAULT,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "quantity" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
