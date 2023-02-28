-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "value" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cardNameHolder" TEXT NOT NULL,
    "cardExpirationDate" TEXT NOT NULL,
    "cardVerificationCode" TEXT NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_cardNumber_key" ON "transactions"("cardNumber");
