/*
  Warnings:

  - You are about to drop the column `request_type` on the `apis` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[path]` on the table `apis` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content_type` to the `apis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request_field` to the `apis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apis` DROP COLUMN `request_type`,
    ADD COLUMN `content_type` ENUM('JSON', 'FORM', 'FORMDATA', 'TEXT') NOT NULL,
    ADD COLUMN `request_field` ENUM('QUERY', 'PARAMS', 'BODY') NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `projects` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `projects_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_and_relation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` VARCHAR(191) NOT NULL,
    `apiId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `apis_path_key` ON `apis`(`path`);

-- AddForeignKey
ALTER TABLE `project_and_relation` ADD CONSTRAINT `project_and_relation_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_and_relation` ADD CONSTRAINT `project_and_relation_apiId_fkey` FOREIGN KEY (`apiId`) REFERENCES `apis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
