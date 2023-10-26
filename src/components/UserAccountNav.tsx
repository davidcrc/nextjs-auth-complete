"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const UserAccountNav = () => {
  const handleSignOut = async () => {
    signOut({
      redirect: true,
      callbackUrl: `/sign-in`,
    });
  };

  return (
    <Button variant={"destructive"} onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default UserAccountNav;
