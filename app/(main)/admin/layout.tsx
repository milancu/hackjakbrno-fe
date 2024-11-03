"use client";

import React from "react";
import { useAuth } from "@/lib/hooks/auth";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth({ middleware: "auth" });

  console.log(user.roles[0].name);

  if (!user) {
    return <div>loading...</div>;
  }

  return <div className={"fixed inset-0"}>{children}</div>;
}