const { prismaClient } = require("../src/prisma-client");



test.only("should be able to sequential transaction", async function () {
    const [anies, prabowo, ganjar] = await prismaClient.$transaction([
        prismaClient.customer.create({
            data: {
                id: "Anies",
                email: "anies45@gmail.com",
                name: "Anies Baswedan",
                phone: "0812345671"
            }
        }),
        prismaClient.customer.create({
            data: {
                id: "Prabowo",
                email: "prabowo45@gmail.com",
                name: "Prabowo Subianto",
                phone: "0812345672"
            }
        }),
        prismaClient.customer.create({
            data: {
                id: "Ganjar",
                email: "ganjar45@gmail.com",
                name: "Ganjar Pranowo",
                phone: "0812345673"
            }
        })
    ]);

    expect(anies.id).toBe("Anies");
    expect(prabowo.id).toBe("Prabowo");
    expect(ganjar.id).toBe("Ganjar");
});

test.only("should be able to interactive transaction", async function () {
    const [muhamimin, gibran, mahfud] = await prismaClient.$transaction(async (prisma) => {
        const dataMuhaimin = await prisma.customer.create({
            data: {
                id: "Muhaimin",
                email: "muhaimin45@gmail.com",
                name: "Muhamimin Iskandar",
                phone: "0812345611"
            }
        });
        const dataGibran = await prisma.customer.create({
            data: {
                id: "Gibran",
                email: "gibran45@gmail.com",
                name: "Gibran Rakabuming",
                phone: "0812345622"
            }
        });
        const dataMahfud = await prisma.customer.create({
            data: {
                id: "Mahfud",
                email: "mahfud@gmail.com",
                name: "Mahfud MD",
                phone: "0812345633"
            }
        });

        return [dataMuhaimin, dataGibran, dataMahfud];
    });

    expect(muhamimin.id).toBe("Muhaimin");
    expect(gibran.id).toBe("Gibran");
    expect(mahfud.id).toBe("Mahfud");
});