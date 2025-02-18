import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from "@/components/ui/sidebar";
import { FaCog, FaSignOutAlt, FaBell, FaPlus, FaTachometerAlt, FaCheck, FaCreditCard, FaMapMarkerAlt, FaUser, FaKeyboard } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import Mifos from "@/assets/images/MifosX_logoSmall.png";
import { useNavigate } from "react-router-dom";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: FaTachometerAlt },
  { title: "Navigation", url: "/navigation", icon: FaMapMarkerAlt },
  { title: "Checker Inbox and Tasks", url: "/checker-tasks", icon: FaCheck },
  { title: "Individual Collection Sheet", url: "/collection-sheet", icon: FaCreditCard },
  { title: "Notifications", url: "/notifications", icon: FaBell },
  { title: "Frequent Postings", url: "/frequent-postings", icon: GrPowerCycle },
  { title: "Create Journal Entry", url: "/journal-entry", icon: FaPlus },
  { title: "Chart of Accounts", url: "/chart-of-accounts", icon: BsFillDiagram3Fill },
  { title: "Keyboard Shortcuts", url: "/keyboard-shortcuts", icon: FaKeyboard },
  { title: "Help", url: "/help", icon: IoIosHelpCircle },
];

export const AppSidebar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <Sidebar className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <SidebarHeader className="p-6 text-center border-b">
          <img
            src={Mifos}
            alt="Mifos X"
            className="h-14 mx-auto cursor-pointer hover:h-16 transition-all duration-200"
            onClick={handleHome}
          />
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
                    <button
                      onClick={() => navigate(item.url)}
                      className="flex items-center space-x-2 text-black hover:bg-gray-200 p-2 my-2 rounded w-full text-left"
                    >
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </button>
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
