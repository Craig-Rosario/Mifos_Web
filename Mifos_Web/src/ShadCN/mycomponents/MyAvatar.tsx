import { Avatar as Profile, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
