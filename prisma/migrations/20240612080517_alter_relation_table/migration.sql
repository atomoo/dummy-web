/*
  Warnings:

  - You are about to drop the `project_and_relation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `project_and_relation` DROP FOREIGN KEY `project_and_relation_apiId_fkey`;

-- DropForeignKey
ALTER TABLE `project_and_relation` DROP FOREIGN KEY `project_and_relation_projectId_fkey`;

-- DropTable
DROP TABLE `project_and_relation`;

-- CreateTable
CREATE TABLE `project_and_api` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` VARCHAR(191) NOT NULL,
    `apiId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `project_and_api` ADD CONSTRAINT `project_and_api_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_and_api` ADD CONSTRAINT `project_and_api_apiId_fkey` FOREIGN KEY (`apiId`) REFERENCES `apis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
