/*
  Warnings:

  - Changed the type of `liquidValue` on the `payables` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `value` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "payables" DROP COLUMN "liquidValue",
ADD COLUMN     "liquidValue" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "value",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
