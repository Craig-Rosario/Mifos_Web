import React from 'react'
import { Avatar as Profile, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import prof from '@/assets/images/MifosX_logoSmall.png'
const Avatar = () => {
    return (
        <div>
            <Profile>
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
            </Profile>

        </div>
    )
}

export default Avatar
