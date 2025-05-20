'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    LargeAvatar
} from "@/components/ui/avatar"
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from 'next/navigation';
import supabase from "../../../helper/supabaseClient";
import { Button } from '@/components/ui/button';
import RandomWordGlitch from "@/components/backend/randomwordglitch";


export default function Profile() {

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsLoggedIn(!!session);
        };

        checkSession();
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setIsLoggedIn(false);
        router.push("/");
    };

    return (

        isLoggedIn ? (
            <div>
                <div>
                    <LargeAvatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </LargeAvatar>
                </div>
                <div>
                    <h1>Username</h1>
                </div>
                <div>
                    <Button variant="outline">Edit profile</Button>
                </div>
                <div>
                    Tagged Quotes
                </div>
                <div>
                    Player Stats
                </div>
            </div >
        ) : (
            <div>Guest</div>
        )

    );
}