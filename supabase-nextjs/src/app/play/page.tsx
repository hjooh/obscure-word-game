'use client'
import React, { useState } from "react";
import RandomWordGlitch from '@/components/backend/randomwordglitch'
import { Button } from '@/components/ui/button'
import SplitPane, { Pane } from "split-pane-react";
import {useRouter} from 'next/router';

export default function Play() {
    const [sizes, setSizes] = useState<(number | string)[]>(['50%', '50%'])

    const router = useRouter();

    const sashStyle: React.CSSProperties = {
        background: '#777',
        width: 4,
        cursor: 'col-resize',
        height: '100%',
    }

    const paneContent: React.CSSProperties = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        // <div className="h-screen flex flex-row">
        //     <div className="h-{screen-200px} flex-grow bg-amber-500">pew</div>
        //     <div className="h-{screen-200px} flex-grow bg-red-500">pewpew</div>
        // </div>
        <div className="flex flex-col h-screen overflow-hidden">
   
            <main className="flex flex-1 overflow-hidden">
                <div className="flex-1 bg-amber-500 flex items-center justify-center">
                    New
                </div>
                <div className="flex-1 bg-red-500 flex items-center justify-center">
                    Saved
                </div>
            </main>
        </div>
    )
}

// export default function Play() {

//     const router = useRouter();

//     const signOut = async () => {
//         const { error } = await supabase.auth.signOut();

//         if (error) throw error;

//         router.push("/login");
//     }

//     return (
//         <Wrapper>
//             <div>
//                 <h1>You are currently logged in.</h1>
//                 <button onClick={signOut}>Sign out</button>
//             </div>
//         </Wrapper>
//     );
// }

