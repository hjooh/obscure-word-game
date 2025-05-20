'use client'
import React from "react";


export default function Play() {
    return (
        <div>
            <div>
                New game
            </div>
            <div>
                Saved games
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

