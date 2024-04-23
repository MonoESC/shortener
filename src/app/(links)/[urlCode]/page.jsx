import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const RedirectPage = async ({ params }) => {
    const { urlCode } = params || "";
    console.log(urlCode);

    const redirection = await prisma.redirection.findUnique({
        where: { urlCode },
    });

    if (redirection) {
        redirect(redirection.url);
    }

    // notFound()

    return <div>{urlCode}: Not found</div>;
};

export default RedirectPage;
