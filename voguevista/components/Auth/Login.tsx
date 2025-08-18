"use client"

import TextInput from "@/components/FormInputs/TextInput"; // Importing custom TextInput component
import Link from "next/link"; // Importing Link component from Next.js
import { useState } from "react"; // Importing useState hook from React
import SubmitButton from "@/components/FormInputs/SubmitButton"; // Importing custom SubmitButton component
import { signIn } from "next-auth/react"; // Importing signIn function from next-auth/react
import { useRouter } from "next/navigation"; // Importing useRouter hook from next/navigation
import usePasswordToggle from "@/lib/passwordToggle";
import { LoginInputProps } from "@/types/types";
import { useForm } from "react-hook-form";
import { Alert } from "../ui/alert";
import { div } from "framer-motion/client";

export default function LoginFormWithBg() {
    const [isLoading, setIsLoading]=useState(false); // State for loading state
    const [showNotification, setShowNotification]=useState(false); // State for showing notification
    const [loginError, setLoginError]=useState(""); // State for login error
    const [loginSuccess, setLoginSuccess]=useState(""); // State for login success
    const router = useRouter(); // useRouter hook for routing
    const {
      register,
      handleSubmit,
      reset,
      formState:{errors},
    }=useForm<LoginInputProps>();

    async function onSubmit(data: LoginInputProps) {
      setIsLoading(true);
      setLoginError("");
      setLoginSuccess("");
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (loginData?.error) {
        setLoginError("Sign In error: Check your credentials");
      } else {
        setLoginSuccess("Login Successful!");
        reset();
        // Optionally redirect after login
        // router.push("/dashboard");
      }
      setIsLoading(false);
    }

    const [passwordInputType, PasswordToggleIcon] = usePasswordToggle();
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center p-6">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {showNotification && (
              <Alert color="failure" >
                <span className="font-medium">Sign-in error!</span> Please Check
                your credentials
              </Alert>
            )}
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. rentify123@gmail.com"
            />

            {loginError && (
              <div className="text-red-500 text-center">{loginError}</div>
            )}
            {loginSuccess && (
              <div className="text-green-600 text-center">{loginSuccess}</div>
            )}
            <div className="relative">
              <TextInput
                label="Password"
                register={register}
                page="login"
                name="password"
                type={passwordInputType}
                errors={errors}
                placeholder="******"
              />
              <span className="absolute top-11 right-2">
                {PasswordToggleIcon}
              </span>
            </div>

            <SubmitButton
              title="Login"
              isLoading={isLoading}
              LoadingTitle="Logging you in please wait...."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
}
