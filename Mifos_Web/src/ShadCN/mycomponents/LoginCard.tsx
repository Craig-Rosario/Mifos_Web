import React from 'react'
import logo from '@/assets/images/mifos_lg-logo.jpg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import NInput from './NInput'
import LoginBtn from './LoginBtn'
import ForgotPassBtn from './ForgotPassBtn'
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import DropDown from './DropDown'
import NBtn from './NBtn'



const LoginCard = () => {
    return (
        <div>
            <Card>
                <div className="flex flex-row-reverse top-4 right-4 ">
                    <CardContent>
                        <DropDown name="Language" options={["English", "Spanish", "French", "Italian"]} />
                    </CardContent>
                </div>
                <div className='flex justify-center mb-4 '>
                    <img src={logo} alt="" className="w-82 h-auto"/>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <CardHeader className="p-4 w-[70%]">
                        <CardTitle>Tenant</CardTitle>
                        <NInput />
                    </CardHeader>
                    <CardHeader className="p-4 w-[70%]">
                        <CardTitle>Username</CardTitle>
                        <NInput />
                        <CardDescription>Enter username</CardDescription>
                    </CardHeader>
                    <CardHeader className="p-3 w-[70%]">
                        <CardTitle>Password</CardTitle>
                        <NInput />
                        <CardDescription>Enter password</CardDescription>
                    </CardHeader>
                    <CardContent className='p-6'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms and conditions</Label>
                        </div>
                    </CardContent>
                    <CardContent>
                        <LoginBtn />
                    </CardContent>
                    <CardContent>
                        <ForgotPassBtn />
                    </CardContent>
                </div>
                <div>
                    <CardContent className='flex justify-center'>
                        <NBtn name="Resources" />
                        <NBtn name="Community" />
                        <NBtn name="Contribute" /> 
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default LoginCard
