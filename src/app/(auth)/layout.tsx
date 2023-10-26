import { getServerSession } from "next-auth";
import { FC, ReactNode } from "react";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/admin");
  }

  return <div className="bg-slate-200 p-10 rounded-md">{children}</div>;
};

export default AuthLayout;
