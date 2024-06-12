-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(36) NOT NULL,
    `email` VARCHAR(30) NULL,
    `username` VARCHAR(10) NOT NULL,
    `name` VARCHAR(30) NULL,
    `password` VARCHAR(32) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `apis` (
    `id` VARCHAR(36) NOT NULL,
    `path` VARCHAR(100) NOT NULL,
    `method` CHAR(10) NOT NULL,
    `request_type` VARCHAR(191) NOT NULL,
    `request` JSON NULL,
    `response` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
