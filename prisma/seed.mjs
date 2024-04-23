import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
    const user1 = await prisma.user.upsert({
        where: {
            email: "mono@mail.com",
        },
        update: {},
        create: {
            email: "mono@mail.com",
            name: "mono",
            password: await hash("123", 10),
        },
    });
    const user2 = await prisma.user.upsert({
        where: {
            email: "bube@mail.com",
        },
        update: {},
        create: {
            email: "bube@mail.com",
            name: "bube",
            password: await hash("123", 10),
        },
    });
    const user3 = await prisma.user.upsert({
        where: {
            email: "negra@mail.com",
        },
        update: {},
        create: {
            email: "negra@mail.com",
            name: "negra",
            password: await hash("123", 10),
        },
    });
    const redirect1 = await prisma.redirection.upsert({
        where: {
            urlCode: "code1",
        },
        update: {},
        create: {
            urlCode: "code1",
            url: "https://targetweb.com/code1",
        },
    });
    const redirect2 = await prisma.redirection.upsert({
        where: {
            urlCode: "code2",
        },
        update: {},
        create: {
            urlCode: "code2",
            url: "https://targetweb.com/code2",
        },
    });
    const redirect3 = await prisma.redirection.upsert({
        where: {
            urlCode: "code3",
        },
        update: {},
        create: {
            urlCode: "code3",
            url: "https://targetweb.com/code3",
        },
    });
    console.log(user1, user2, user3);
    console.log(redirect1, redirect2, redirect3);
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
