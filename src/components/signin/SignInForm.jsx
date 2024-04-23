"use client";
import { signInUser } from "@/actions/auth";
import React from "react";

export const SignInForm = () => {
    return (
        <form
            // action={signInUser}
            action={async (formData) => {
                formData.append("redirectTo", "/_");
                await signInUser(formData);
            }}
            // action={async (formData) => {
            //     "use server";
            //     try {
            //         formData.append("redirectTo", "/_");
            //         await signIn("credentials", formData);
            //     } catch (error) {
            //         console.error("Problem with User");
            //     }
            // }}
        >
            {/* {user && (
                // <pre>{JSON.stringify(session, null, 2)}</pre>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            )} */}
            <div className="space-y-4">
                <div className="">
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            defaultValue={"mono@mail.com"}
                            className="block border"
                        />
                    </label>
                </div>
                <div className="">
                    <label>
                        Password
                        <input
                            name="password"
                            type="password"
                            defaultValue={"123"}
                            className="block border"
                        />
                    </label>
                </div>
                {/* {!user && (
                    <div>
                        <button className="bg-emerald-500 px-3 py-1.5 rounded-sm">
                            Sign In
                        </button>
                    </div>
                )} */}
                <div>
                    <button className="bg-emerald-500 px-3 py-1.5 rounded-sm">
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    );
};
