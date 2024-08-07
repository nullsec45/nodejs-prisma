const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", () => {
  it("should be able to create with auto increment primary key", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    expect(category).toHaveProperty("id");
  });
});
