import Navbar from "./pages/Navbar"; 
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/ShadCN/mycomponents/AppSidebar";

const App = () => {
  return (
    <SidebarProvider> 
      <div className="flex h-screen w-full"> 
        <AppSidebar /> 
        <div className="flex-1 flex flex-col overflow-hidden"> 
          <Navbar />
          <div className="p-4 overflow-auto"> 

          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
