const { PrismaClient } = require("@prisma/client")

const prismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: [
        "query", "info", "warn",
    ]
});

module.exports = {
    prismaClient
}