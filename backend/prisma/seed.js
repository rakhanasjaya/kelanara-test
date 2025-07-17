// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
    const users = {
        email: "admin@gmail.com",
        password: "Admin123!",
        role: "admin",
    };

    const hash = await bcrypt.hash(users.password, 10);
    await prisma.user.create({
        data: {
            email: users.email,
            password_hash: hash,
            role: users.role,
        },
    });
    console.log(`Seeded user: ${users.email}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
