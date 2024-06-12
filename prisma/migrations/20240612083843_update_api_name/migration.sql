/*
  Warnings:

  - You are about to alter the column `projectId` on the `project_and_api` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `apiId` on the `project_and_api` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.

*/
-- DropForeignKey
ALTER TABLE `project_and_api` DROP FOREIGN KEY `project_and_api_apiId_fkey`;

-- DropForeignKey
ALTER TABLE `project_and_api` DROP FOREIGN KEY `project_and_api_projectId_fkey`;

-- AlterTable
ALTER TABLE `project_and_api` MODIFY `projectId` VARCHAR(36) NOT NULL,
    MODIFY `apiId` VARCHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `project_and_api` ADD CONSTRAINT `project_and_api_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_and_api` ADD CONSTRAINT `project_and_api_apiId_fkey` FOREIGN KEY (`apiId`) REFERENCES `apis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
