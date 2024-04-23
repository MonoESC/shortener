import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInUser } from "@/data/users";
import { signInSchema } from "@/utils/zod";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    // theme: {
    //     logo: "/logo.png",
    //     brandColor: "#ff5555",
    //     buttonText: "#ffffff",
    //     colorScheme: "light",
    // },
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null;

                    const { email, password } = await signInSchema.parseAsync(
                        credentials
                    );

                    user = await signInUser(email, password);
                    if (!user) {
                        // No user found, so this is their first attempt to login
                        // meaning this is also the place you could do registration
                        // throw new Error("User not found.");
                        console.log("User not found.");
                        return null;
                    }

                    // return user object with the their profile data
                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                        console.log(error);
                        // Return `null` to indicate that the credentials are invalid
                        return null;
                    }
                }
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            console.log({ user });
            session.user = {
                ...session.user,
                id: token.sub,
                image: session.user.image || "",
                role: "admin",
            };
            return session;
        },
    },
});
