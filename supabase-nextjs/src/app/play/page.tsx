'use client'
import React, { useState } from "react";
import RandomWordGlitch from '@/components/backend/randomwordglitch'
import { Button } from '@/components/ui/button'
import SplitPane, { Pane } from "split-pane-react";

export default function Play() {
    const [sizes, setSizes] = useState<(number | string)[]>(['50%', '50%'])

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
        <>
            <SplitPane
                split="vertical"
                sizes={['50%', '50%']}
                onChange={setSizes}
                sashRender={() => <div style={sashStyle} />}
                className="w-full h-full"
            >

                {/* Left pane */}
                <Pane>
                    <div style={{ ...paneContent, background: '#ddd' }}>
                        Pane 1
                    </div>
                </Pane>

                {/* Right pane */}
                <Pane>
                    <div style={{ ...paneContent, background: '#a1a5a9' }}>
                        Pane 2
                    </div>
                </Pane>
            </SplitPane>
        </>
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

