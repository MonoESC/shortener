import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const MOCK_DATA = ["link-1", "link-2"];

const RedirectPage = async ({ params }) => {
    const { code } = params || "";
    console.log(code);

    const redirection = await prisma.redirection.findUnique({
        where: { code },
    });

    if (redirection) {
        redirect(redirection.url);
    }

    // notFound()

    return <div>{code}: Not found</div>;
};

export default RedirectPage;
