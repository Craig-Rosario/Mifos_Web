import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from "@/components/ui/sidebar";
import { FaCog, FaSignOutAlt, FaBell, FaPlus, FaTachometerAlt, FaCheck, FaCreditCard, FaMapMarkerAlt, FaUser, FaKeyboard } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import Mifos from "@/assets/images/MifosX_logoSmall.png";

const mainItems = [
  { title: "Dashboard", url: "#", icon: FaTachometerAlt },
  { title: "Navigation", url: "#", icon: FaMapMarkerAlt },
  { title: "Checker Inbox and Tasks", url: "#", icon: FaCheck },
  { title: "Individual Collection Sheet", url: "#", icon: FaCreditCard },
  { title: "Notifications", url: "#", icon: FaBell },
  { title: "Frequent Postings", url: "#", icon: GrPowerCycle },
  { title: "Create Journal Entry", url: "#", icon: FaPlus },
  { title: "Chart of Accounts", url: "#", icon: BsFillDiagram3Fill },
  { title: "Keyboard Shortcuts", url: "#", icon: FaKeyboard },
  { title: "Help", url: "#", icon: IoIosHelpCircle },
];

export const AppSidebar = () => {
  return (
    <Sidebar className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <SidebarHeader className="p-6 text-center border-b">
          <img src={Mifos} alt="Mifos X" className="h-15 mx-auto" />
          <h1 className="text-3xl font-bold mt-2">Mifos X</h1>

          <div className="mt-2">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <FaUser className="text-gray-600 text-3xl" />
            </div>
            <p className="text-gray-600 text-sm mt-2">default / mifos</p>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <FaCog className="text-gray-600 cursor-pointer text-lg" />
            <FaSignOutAlt className="text-gray-600 cursor-pointer text-lg" />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="px-6 py-3 text-gray-500 text-sm font-semibold">
              Frequently Accessed
            </SidebarGroupLabel>
            <SidebarMenu></SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="px-6 py-3 text-gray-500 text-md font-semibold">
              Main Items
            </SidebarGroupLabel>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-2 text-black hover:bg-gray-700 p-2 my-2 rounded">
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
};
