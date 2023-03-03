-- DropForeignKey
ALTER TABLE "payables" DROP CONSTRAINT "payables_transactionId_fkey";

-- AddForeignKey
ALTER TABLE "payables" ADD CONSTRAINT "payables_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
