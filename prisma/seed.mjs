import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const redirect1 = await prisma.redirection.upsert({
    where: {
      code: "code1",
    },
    update: {},
    create: {
      code: "code1",
      url: "https://targetweb.com/code1",
    },
  });
  const redirect2 = await prisma.redirection.upsert({
    where: {
      code: "code2",
    },
    update: {},
    create: {
      code: "code2",
      url: "https://targetweb.com/code2",
    },
  });
  const redirect3 = await prisma.redirection.upsert({
    where: {
      code: "code3",
    },
    update: {},
    create: {
      code: "code3",
      url: "https://targetweb.com/code3",
    },
  });
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
