import { auth } from "@/auth";

const Home = async () => {
    const session = await auth();
    return (
        <div>
            <div className="p-4 font-bold rounded-t-md bg-neutral-200">
                Current Session
            </div>
            <pre className="py-6 px-4 whitespace-pre-wrap break-all">
                {JSON.stringify(session, null, 2)}
            </pre>

            <code>auth()</code>
        </div>
    );
};

export default Home;
