"use client";

import Login from "@/components/Auth/Login";


export default function Page() {
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {typeof Login === "function" ? <Login /> : null}
    </div>
);
}