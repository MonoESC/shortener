import { prisma } from "@/lib/prisma";

export const getRedirections = async () => {
  const data = await prisma.redirection.findMany();
  return data;
};
