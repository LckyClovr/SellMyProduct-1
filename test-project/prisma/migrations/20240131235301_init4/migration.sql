-- CreateTable
CREATE TABLE `user` (
    `user_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `headline` TEXT NULL,
    `subheadline` TEXT NULL,
    `call_to_action` TEXT NULL,
    `sales1` TEXT NULL,
    `sales2` TEXT NULL,
    `sales3` TEXT NULL,
    `color` TEXT NULL,
    `prompt` TEXT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
