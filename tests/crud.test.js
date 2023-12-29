const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
    it("should be able to create customer", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "Fajar",
                email: "ramafajar805@gmail.com",
                name: "Rama Fajar",
                phone: "0812345678"
            }
        });

        expect(customer.id).toBe("Fajar");
        expect(customer.email).toBe("ramafajar805@gmail.com");
        expect(customer.name).toBe("Rama Fajar");
        expect(customer.phone).toBe("0812345678");
    });

    it("should be able to update customer", async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Rama Fajar Fadhillah",
            },
            where: {
                id: "Fajar"
            }
        });

        expect(customer.name).toBe("Rama Fajar Fadhillah");
    });
});

test.only("should be able to read customer", async function () {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "Fajar"
        }
    });

    expect(customer.id).toBe("Fajar");
    expect(customer.email).toBe("ramafajar805@gmail.com");
});

test.only("should be able to delete customer", async function () {
    const customer = await prismaClient.customer.delete({
        where: {
            id: "Fajar"
        }
    });

    expect(customer.id).toBe("Fajar");
    expect(customer.email).toBe("ramafajar805@gmail.com");
});