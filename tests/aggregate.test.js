const { prismaClient } = require("../src/prisma-client");


describe("Aggregate", () => {
    it.skip("should be able query aggregate", async () => {
        const result = await prismaClient.product.aggregate({
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            }
        });

        expect(result._min.price).toBe(100000);
        expect(result._max.price).toBe(500000);
        expect(result._avg.price).toBe(300000);
    });

    it.skip("should can do aggregate function with group by", async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            }
        });

        console.info(result);
    });

    it("should can do aggregate function with group by and having", async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 300000
                    }
                }
            }
        });

        console.info(result);
    });
})