/*
  Warnings:

  - Changed the type of `paymentDate` on the `payables` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "payables" DROP COLUMN "paymentDate",
ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL;
