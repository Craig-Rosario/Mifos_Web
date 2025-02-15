import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DropDown = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>Choose Language</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Lanuage</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Spanish</DropdownMenuItem>
                    <DropdownMenuItem>French</DropdownMenuItem>
                    <DropdownMenuItem>Italian</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default DropDown
