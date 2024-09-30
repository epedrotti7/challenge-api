-- CreateTable
CREATE TABLE `register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `physicsPerson` BOOLEAN NOT NULL,
    `juridicPerson` BOOLEAN NOT NULL,
    `cnpj` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `fone` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `repeatEmail` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `complement` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `acceptedTerms` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
