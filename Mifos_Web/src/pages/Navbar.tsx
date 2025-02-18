import DropDown from '@/ShadCN/mycomponents/DropDown'
import MyAvatar from '@/ShadCN/mycomponents/MyAvatar'
import MyAlert from '@/ShadCN/mycomponents/MyAlert'
import { BsBank } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import SidebarTriggerButton from '@/ShadCN/mycomponents/SidebarTriggerButton';

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between bg-[#1074b9] p- shadow-2xl text-base ">
                <div className="flex text-base">
                    <div className='flex  text-white items-center px-6 py-2 rounded-md transition-all duration-200'>
                        <SidebarTriggerButton />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center">
                        <DropDown
                            name={<span className="flex items-center gap-2 cursor-pointer"><BsBank /> Institution</span>}
                            options={["Clients", "Groups", "Centers", "Accounting"]}
                        />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center">
                        <DropDown
                            name={<span className="flex items-center gap-2 cursor-pointer"><FaRegMoneyBillAlt /> Accounting</span>}
                            options={["Clients", "Groups", "Centers", "Accounting", "Reports", "Admin", "Self Service"]}
                        />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center">
                        <DropDown
                            name={<span className="flex items-center gap-2 cursor-pointer"><FaChartLine /> Reports</span>}
                            options={["All", "Clients", "Loans", "Savings", "Funds", "Accounting", "XBRL"]}
                        />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center">
                        <DropDown
                            name={<span className="flex items-center gap-2 cursor-pointer"><FaShieldAlt /> Admin</span>}
                            options={["Users", "Organization", "System", "Products", "Templates"]}
                        />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center">
                        <DropDown
                            name={<span className="flex items-center gap-2 cursor-pointer"><MdGroups /> Self Service</span>}
                            options={["User Management", "App Configuration", "Task Management"]}
                        />
                    </div>
                    <div className="text-white px-6 py-2 rounded-md transition-all duration-200 hover:bg-[#1085b9] flex items-center cursor-pointer">
                        <MyAlert />
                    </div>

                </div>
                <div className='flex text-lg '>
                    <div className='flex items-center text-white px-6 py-2 rounded-md transition-all duration-200 ' >
                        <button className='cursor-pointer'><FaSearch /></button>
                    </div>
                    <div className='flex items-center text-white px-6 py-2 rounded-md transition-all duration-200'>
                        <DropDown name={<span className="flex items-center gap-2 cursor-pointer">Language</span>}
                            options={["English", "Spanish", "French", "Italian"]} />
                    </div>
                    <div className='flex items-center text-white px-6 py-2 rounded-md transition-all duration-200'>
                        <button className='cursor-pointer'><MdNotifications /></button>
                    </div>
                    <div className='flex items-center text-white px-6 py-2 rounded-md transition-all duration-200'>
                        <button className='cursor-pointer'><LuMoon /></button>
                    </div>
                    <div className='flex items-center text-white px-6 py-2 rounded-md transition-all duration-200'>
                        <button className='cursor-pointer'><MyAvatar /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;
