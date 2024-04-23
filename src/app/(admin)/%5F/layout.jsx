import React from "react";
import { auth, signOut } from "@/auth";
const AdminLayout = async ({ children }) => {
    const session = await auth();
    const user = session?.user;
    return (
        <div>
            <header className="flex items-center justify-between px-5 h-10 bg-sky-400 text-white">
                <div></div>
                <div>
                    {user && (
                        <form
                            action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/signin" });
                            }}
                        >
                            <button>Sign Out</button>
                        </form>
                    )}
                </div>
            </header>
            {children}
        </div>
    );
};

export default AdminLayout;
