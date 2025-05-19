'use client'
import React from "react";
import RandomWordGlitch from '@/components/backend/randomwordglitch'
import { Button } from '@/components/ui/button'

export default function Play() {

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

            {/* center both rows as one block */}
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {/* first row: New & Saved side-by-side */}
                    <Button variant="outline">New</Button>
                    <Button variant="outline">Saved</Button>

                    {/* second row: span both */}
                    <Button variant="outline" className="col-span-2">
                        Instructions
                    </Button>
                </div>
            </div>
        </div>
    );
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

