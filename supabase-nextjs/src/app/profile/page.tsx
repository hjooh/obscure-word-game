'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    LargeAvatar
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";


export default function Profile() {
    return (
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
        </div>
    );
}