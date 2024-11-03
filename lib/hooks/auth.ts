import useSWR from "swr";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";

// @ts-ignore
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/me", () =>
    axiosInstance
      .get("/api/me")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        // router.push("/verify-email");
      }),
  );

  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");

  // @ts-ignore
  const register = async ({ setErrors, ...props }) => {
    await csrf();

    setErrors([]);

    axiosInstance
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  // @ts-ignore
  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axiosInstance
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: {
    setErrors: any;
    setStatus: any;
    email: string;
  }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axiosInstance
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: {
    setErrors: any;
    setStatus: any;
  }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axiosInstance
      .post("/reset-password", { token: params.token, ...props })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status)),
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }: { setStatus: any }) => {
    axiosInstance
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axiosInstance.post("/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      console.log("asdjaldkj");
      router.push(redirectIfAuthenticated);
    }

    // @ts-ignore
    // if (middleware === "auth" && user)
    //   if (user.roles[0].name === "doctor") {
    //     router.push("/admin");
    //   } else {
    //     router.push("/");
    //   }
    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
