const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
    it("should can create", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "Entong",
                email: "entong@gmail.com",
                phone: "08123457689",
                name: "Entong Surotong"
            },
            select: {
                id: true,
                name: true
            }
        });

        expect(customer.id).toBe("Entong");
        expect(customer.name).toBe("Entong Surotong");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });
});