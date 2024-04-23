"use server";
import { signIn } from "@/auth";

export const signInUser = async (formData) => {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        console.error("Problem with User");
        // console.error(error);
    }
};
