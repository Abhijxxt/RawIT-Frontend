-- CreateTable
CREATE TABLE `transaction` (
    `tid` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` FLOAT NOT NULL,
    `pid` INTEGER NOT NULL,
    `uid` INTEGER NOT NULL,
    `vid` INTEGER NOT NULL,
    `dateOfTransaction` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `statusOfTransaction` VARCHAR(20) NOT NULL DEFAULT 'Success',

    PRIMARY KEY (`tid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `cid` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` INTEGER NOT NULL,
    `pid` INTEGER NOT NULL,
    `price` FLOAT NOT NULL,

    PRIMARY KEY (`cid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
