const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
    // it("should can create many records", async () => {
    //     const { count } = await prismaClient.customer.createMany({
    //         data: [
    //             {
    //                 id: "Entong",
    //                 email: "entong@gmail.com",
    //                 phone: "21415",
    //                 name: "Entong encep"
    //             },
    //             {
    //                 id: "Joko",
    //                 email: "joko@gmail.com",
    //                 phone: "13135",
    //                 name: "Joko Asep"
    //             }
    //         ]
    //     });

    //     expect(count).toBe(2);
    // });

    // it("should can update many records", async () => {
    //     const { count } = await prismaClient.customer.updateMany({
    //         data: {
    //             email: "emailupdate@gmail.com"
    //         },
    //         where: {
    //             id: "Joko"
    //         }
    //     });

    //     expect(count).toBe(1);
    // });

    // it("should can delete many records", async () => {
    //     const { count } = await prismaClient.customer.deleteMany({
    //         where: {
    //             email: "emailupdate@gmail.com"
    //         },
    //     });

    //     expect(count).toBe(1);
    // });

    it("should can read many records", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                id: "Anies"
            },
        });

        console.info(customers);
        expect(customers.length).toBe(1);
    });
});