'use client'
import React, { useState } from "react";
import supabase from "../../../helper/supabaseClient";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data.user) {
            router.push("/");
        } else {
            setMessage("Unexpected error occured. Please try again.");
        }

        setEmail("");
        setPassword("");
    };

    return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-1/4 space-y-6 text-center">
            <h2 className="text-2xl font-bold">Login</h2>
            {message && <span className="text-red-500">{message}</span>}
            
            <form onSubmit={handleLogin} className="space-y-4">
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <Button variant="destructive" type="submit" className="w-full">
                    Log In
                </Button>
            </form>

            <div className="text-sm">
                <span>Don't have an account? </span>
                <Link href="/register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </div>
        </div>
    </div>
);
}

