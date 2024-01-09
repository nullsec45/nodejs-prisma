const { PrismaClient } = require("@prisma/client");
const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
    it("should be able to create with auto increment primary key", async () => {
        const category = await PrismaClient.category.create({
            data: {
                name: "Food"
            }
        });

        console.infoo(category);
        expect(category).toHaveProperty("id");
    });
})