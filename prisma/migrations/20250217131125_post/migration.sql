/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `nickname` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ADD COLUMN     "nickname" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "post" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
