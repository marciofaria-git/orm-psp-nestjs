/*
  Warnings:

  - Added the required column `liquidValue` to the `payables` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payables" ADD COLUMN     "liquidValue" TEXT NOT NULL;
