import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <div>Please login before check this page</div>;
  }

  return <h2>Admin page - welcome back {session?.user.username}</h2>;
};

export default page;
