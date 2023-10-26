import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import User from "@/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Home</h1>

      <Link className={buttonVariants()} href={"/admin"}>
        Open Admin
      </Link>

      {/* TEst it with slow network */}
      <h2>Client Session</h2>
      <User />

      <h2>server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
