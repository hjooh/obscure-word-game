import React, { useEffect, useState } from "react";
import supabase from "../../../helper/supabaseClient";
import { useRouter } from 'next/navigation';

export default function Wrapper({children}: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getSession = async () => {
            const {
                data: {session},
            } = await supabase.auth.getSession();
        
        setAuthenticated(!!session); // !!null -> false, !!{object} -> true
        setLoading(false);
        };

        getSession();
    }, []);

    useEffect(() => {
        if (!loading && !authenticated) {
            router.push("/login");
        }
    }, [loading, authenticated, router]);

    if (loading) {
        return <div>Loading...</div>
    } 
    if (!authenticated) {
        return null;
    }
    
    return <>{children}</>;
}


