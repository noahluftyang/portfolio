-- CreateEnum
CREATE TYPE "public"."Service" AS ENUM ('CHATTING', 'SOCIAL_NETWORKING');

-- CreateEnum
CREATE TYPE "public"."Provider" AS ENUM ('APPLE', 'FACEBOOK', 'GITHUB', 'GOOGLE', 'KAKAO', 'NAVER', 'TWITTER');

-- CreateTable
CREATE TABLE "users" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "username" TEXT,
    "service" "Service" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_accounts" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider" "Provider" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- AddForeignKey
ALTER TABLE "social_accounts" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
