import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from '@/components/ui/sidebar';
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"; 

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-lg font-semibold text-black">Mifos Dashboard</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex items-center space-x-2 text-black hover:bg-gray-700 p-2 rounded">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-black">Footer Content</p>
      </SidebarFooter>
    </Sidebar>
  );
};
