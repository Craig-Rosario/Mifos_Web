import { SidebarTrigger } from "@/components/ui/sidebar"; 
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarTriggerButton = () => {
  return (
    <SidebarTrigger className="p-2 text-white rounded-md cursor-pointer">
      <GiHamburgerMenu size={24} />
    </SidebarTrigger>
  );
};

export default SidebarTriggerButton;
