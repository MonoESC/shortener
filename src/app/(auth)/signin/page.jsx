import { signIn, auth, signOut } from "@/auth";
// import { SignInForm } from "@/components/signin/SignInForm";
import React from "react";

const SignInPage = async () => {
    const session = await auth();
    const user = session?.user;
    return (
        <div>
            <form
                action={async (formData) => {
                    "use server";
                    formData.append("redirectTo", "/_");
                    const res = await signIn("credentials", formData);
                    console.log(res);
                    // try {
                    //     formData.append("redirectTo", "/_");
                    //     await signIn("credentials", formData);
                    // } catch (error) {
                    //     console.error("Problem with User");
                    // }
                }}
            >
                <pre>{JSON.stringify(session, null, 2)}</pre>
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
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
                    {!user && (
                        <div>
                            <button className="bg-emerald-500 px-3 py-1.5 rounded-sm">
                                Sign In
                            </button>
                        </div>
                    )}
                </div>
            </form>

            {/* <SignInForm /> */}
            {user && (
                <form
                    action={async () => {
                        "use server";
                        await signOut();
                    }}
                >
                    <div>
                        <button className="bg-emerald-500 px-3 py-1.5 rounded-sm">
                            Sign Out
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SignInPage;
