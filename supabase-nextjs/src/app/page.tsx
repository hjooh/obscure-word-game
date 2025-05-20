'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Wrapper from "../components/backend/wrapper"
import { useRouter } from 'next/navigation';
import supabase from "../../helper/supabaseClient";
import { Button } from '@/components/ui/button';
import RandomWordGlitch from "@/components/backend/randomwordglitch";

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
    <div className="space-y-8">
      {/* word glitcher */}
      <div className="flex justify-center">
        <RandomWordGlitch
          interval={120}
          glitchDuration={2000}
          pauseMs={2500}
        />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          <Button variant="outline" className="col-span-2 w-full">
            PLAY
          </Button>

          <Link href="/play/instructions" passHref className="col-span-2 w-full">
            <Button variant="outline" className="w-full">
              How to Play
            </Button>
          </Link>

          {isLoggedIn ? (
            <Button
              variant="outline"
              onClick={handleLogout}
              className="col-span-2 w-full"
            >
              Log Out
            </Button>
          ) : (
            <Link href="/login" passHref>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link href="/register" passHref>
              <Button variant="outline" className="w-full">
                Register
              </Button>
            </Link>
          )}
        </div>
      </div>


    </div>
  );
}
