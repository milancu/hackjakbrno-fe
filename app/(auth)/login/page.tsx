"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@icons/health-connect.svg";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/auth";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import AuthSessionStatus from "@/components/auth/auth-session-status";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const checkRouterAndUpdateStatus = (
    router: any,
    errors: any,
    setStatus: any,
  ) => {
    if (!router) return;
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  };

  useEffect(() => {
    checkRouterAndUpdateStatus(router, errors, setStatus);
  }, [router, errors]);

  const submitForm = async (event: any) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <div
      className={
        "flex h-full w-full flex-col items-center justify-between border-red-500"
      }
    >
      <div className={"flex flex-1 flex-col items-center justify-center gap-4"}>
        <Image src={logo} alt={"logo"} width={150} height={150} />
        <div className={"text-4xl font-bold"}>HealthConnect</div>
      </div>
      <AuthSessionStatus className="mb-4" status={status} />
      <form onSubmit={submitForm} className={"w-full"}>
        {/* Email Address */}
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            value={email}
            className="mt-1 block w-full"
            onChange={(event) => setEmail(event.target.value)}
            required
            autoFocus
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            value={password}
            className="mt-1 block w-full"
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        {/* Remember Me */}
        <div className="mt-4 block">
          <label htmlFor="remember_me" className="inline-flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              name="remember"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(event) => setShouldRemember(event.target.checked)}
            />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>
        <div className="mt-4 flex flex-col items-start justify-end">
          <Link href="/register" className={"mb-2 text-xs underline"}>
            Vytvořit účet
          </Link>
          <Button className={"w-full"} type={"submit"}>
            Přihlásit se přes Bank ID
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
