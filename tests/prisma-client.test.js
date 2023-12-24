// import { PrismaClient } from "@prisma/client";

const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
    it("should be able to connect database", async () => {
        await prismaClient.$connect();

        await prismaClient.$disconnect();
    });

    // it("should be able to execute sql", async () => {
    //     const id = "1";
    //     const name = "Rama Fajar Fadhillah";

    //     const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
    //     expect(impacted).toBe(1);
    // });

    it("should be able to query sql", async () => {
        const id = "1";

        const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id=${id}`;

        for (const sample of samples) {
            console.info(`Result sample id : ${sample.id} and name ${sample.name}`);
        }
    })
});


