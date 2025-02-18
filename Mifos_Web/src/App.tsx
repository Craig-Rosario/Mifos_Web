import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/ShadCN/mycomponents/AppSidebar";
import Login from "./pages/auth/Login";
import Home from "./pages/mainpages/Home";
import Dashboard from "./pages/mainpages/Dashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="p-4 overflow-auto">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set Login as the first page */}
        <Route path="/" element={<Login />} />
        
        {/* Home Route */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
