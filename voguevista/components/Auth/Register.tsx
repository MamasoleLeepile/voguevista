"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import usePasswordToggle from "@/lib/passwordToggle";

interface RegisterInputProps {
  fullName: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  role: "USER" | "ADMIN";
}

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterInputProps>();
  const router = useRouter();
  const [passwordInputType, PasswordToggleIcon] = usePasswordToggle();

  const onSubmit: SubmitHandler<RegisterInputProps> = async (data) => {
    setIsLoading(true);
    try {
      // Placeholder for createUser function
      // const user = await createUser(data);
      // if (user && user.status === 200) {
        toast.success("User created successfully");
        router.push("/login");
      // } else {
      //   toast.error("Registration failed");
      // }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="mx-auto w-[350px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500">Enter your information to create an account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              {...register("fullName", { required: "Name is required" })}
              className="mt-1 w-full p-2 border rounded"
              placeholder="Eg. John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
              type="email"
              className="mt-1 w-full p-2 border rounded"
              placeholder="Eg. john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Confirm Email</label>
            <input
              {...register("confirmEmail", {
                required: "Please confirm your email",
                validate: (value) => value === watch("email") || "Emails do not match"
              })}
              type="email"
              className="mt-1 w-full p-2 border rounded"
              placeholder="Eg. john@example.com"
            />
            {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              type="tel"
              className="mt-1 w-full p-2 border rounded"
              placeholder="Eg. +1234567890"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              type={passwordInputType}
              className="mt-1 w-full p-2 border rounded"
              placeholder="**********"
            />
            <span className="absolute top-9 right-2">{PasswordToggleIcon}</span>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="mt-1 w-full p-2 border rounded"
            >
              <option value="USER">User</option>
              <option value="ADMIN" disabled={true}>Admin (Restricted)</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? "Creating Account..." : "Complete Registration"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}