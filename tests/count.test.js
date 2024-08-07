const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
  it("should can count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "Entong Surotong",
      },
    });

    expect(total).toBe(1);
  });
});
