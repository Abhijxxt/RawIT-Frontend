-- CreateTable
CREATE TABLE `issues` (
    `iid` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NULL,
    `status` VARCHAR(50) NOT NULL DEFAULT 'open',
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `person_id` INTEGER NOT NULL,
    `category` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`iid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
