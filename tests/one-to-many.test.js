const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", function () {
  it("should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "FAJAR",
        title: "Insert Comment",
        description: "Comment Desc",
      },
      include: {
        customer: true,
      },
    });
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "ENTONG",
        name: "Entong Bin Titan",
        email: "entong@localhost",
        phone: "0812345678",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Comment DESC 1",
              },
              {
                title: "Comment 2",
                description: "Comment DESC 2",
              },
            ],
          },
        },
        include: {
          comments: true,
        },
      },
    });
    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
        include: {
          comments: true,
        },
      },
    });
    console.info(JSON.stringify(customers));
  });
});
