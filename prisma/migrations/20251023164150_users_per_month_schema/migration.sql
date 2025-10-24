-- CreateTable
CREATE TABLE `UsersPerMonth` (
    `upmid` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(12) NOT NULL,
    `users` INTEGER NOT NULL,

    PRIMARY KEY (`upmid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
