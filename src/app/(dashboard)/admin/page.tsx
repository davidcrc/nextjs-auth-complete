import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <div>Please login before check this page</div>;
  }

  return (
    <h2>
      Admin page - welcome back {session?.user.username || session.user.name}
      {/* {session.user.image && (
        <Image
          src={session.user.image}
          alt="Vercel Logo"
          width={48}
          height={48}
          priority
        />
      )} */}
    </h2>
  );
};

export default page;
