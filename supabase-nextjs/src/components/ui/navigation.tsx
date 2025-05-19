'use client'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { PageLabel, HomePageLabel } from '@/components/ui/pagelabel'
import Link from 'next/link'


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';

export default function Navigation() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    return (
        <div className="flex justify-between items-center px-4 py-2">
            {/* {loggedIn ? <signInButton type="signIn" /> : <signInButton type="signOut" />} */}
            <div className="flex justify-left text-xl font-bold">
                <Link href="/">obscure-word-game</Link>
            </div>
            <div className="flex justify-end">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">☰</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <HomePageLabel href="/">obscure-word-game</HomePageLabel>
                        </SheetHeader>
                        <div className="grid gap-0.7 py-0.8">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <nav>
                                <PageLabel href="/play">Play</PageLabel>
                                </nav>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <PageLabel href="/quotes">Quotes</PageLabel>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <PageLabel href="/profile">Profile</PageLabel>
                            </div>
                            {
                                loggedIn ?
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <PageLabel href="/logout">Log Out</PageLabel>
                                    </div>
                                    :
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <PageLabel href="/login">Log In</PageLabel>
                                    </div>
                            }
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}