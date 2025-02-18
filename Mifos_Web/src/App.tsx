import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; 
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/ShadCN/mycomponents/AppSidebar";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/*"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
