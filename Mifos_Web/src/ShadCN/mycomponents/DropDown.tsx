import React, { ReactNode } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DropDownProps {
    name: string | ReactNode;
    options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ name, options }) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>{name}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    {options.map((option, index) => (
                        <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default DropDown
