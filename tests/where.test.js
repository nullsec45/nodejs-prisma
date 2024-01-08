const { prismaClient } = require("../src/prisma-client")

describe("Where Condition", function () {
    it("should can using or operator", async () => {
        const products = await prismaClient.product.findMany({
            where: {
                OR: [
                    {
                        name: "A"
                    },
                    {
                        name: "C"
                    }
                ]
            },
            orderBy: [
                {
                    name: "asc"
                }
            ]
        })

        console.log(products);
    })
})