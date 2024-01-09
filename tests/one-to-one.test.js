const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", function () {
    it.skip("should can create one to one relation", async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "wallet_fajar",
                customer_id: "fajar",
                balance: 1000000
            },
            include: {
                customer: true
            }
        });

        console.info(wallet);
    });

    it.skip("should can create one to one with relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "Fajar",
                name: "Rama Fajar",
                email: "ramafajar805@gmail.com",
                phone: "0812345678",
                wallet: {
                    create: {
                        id: "wallet_fajar",
                        balance: 9000000
                    }
                }
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it.skip("should can find one to one with relation", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "Fajar",
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it("should can find many one to one with relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                wallet: {
                    isNot: null
                }
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    })
})