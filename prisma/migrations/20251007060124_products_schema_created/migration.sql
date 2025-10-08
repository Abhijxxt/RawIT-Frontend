-- CreateTable
CREATE TABLE `products` (
    `pid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `manufacturer` VARCHAR(200) NOT NULL,
    `image_url` VARCHAR(300) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `price` FLOAT NOT NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `vid` INTEGER NOT NULL,
    `category` VARCHAR(50) NOT NULL DEFAULT 'Unknown',
    `clicks` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`pid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
