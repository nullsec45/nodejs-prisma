const { prismaClient } = require("../src/prisma-client");

describe("Prisma Client", function () {
  it.skip("should can insert many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "FAJAR",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
  });

  it.skip("should can find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "FAJAR",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(customer);
  });

  it.skip("should can find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customer));
  });

  it.skip("should create implisit relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "FAJAR",
      },
      data: {
        loves: {
          connect: [
            {
              id: "P0001",
            },
          ],
        },
      },
      include: {
        loves: true,
      },
    });

    console.log(JSON.stringify(customer));
  });

  it("should find many implisit relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.log(JSON.stringify(customers));
  });
});
