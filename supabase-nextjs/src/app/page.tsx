'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wrapper from "../components/backend/wrapper"
import { useRouter } from 'next/navigation';
import supabase from "../../helper/supabaseClient";

// Boilerplate function
export default function Home() {

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
    <div>
      <nav>
        <h2>Play</h2>
        <h2>How to Play</h2>
        {isLoggedIn ? (
          <button onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link href="/login">
            Log In
          </Link>
        )}
        <h2>Register</h2>
        <h2>Quotes</h2>
        <h2>Profile</h2>
      </nav>
    </div>
  );
}
