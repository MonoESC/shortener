import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/utils/bcrypt";

export const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
};

export const signInUser = async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    const validatePassword = await comparePassword(password, user.password);
    if (!validatePassword) return null;
    return user;
};
