import { compare, hash } from "bcryptjs";

export const hashPassword = async (password) => {
    const salt = 10;
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
};

export const comparePassword = async (password, hash) => {
    const result = await compare(password, hash);
    return result;
};
