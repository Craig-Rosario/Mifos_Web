import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/ShadCN/mycomponents/AppSidebar";
import Login from "./pages/auth/Login";
import Home from "./pages/mainpages/Home";
import Dashboard from "./pages/mainpages/Dashboard";
import NavigationPage from "./pages/mainpages/NavigationPage";
import ChartOfAccounts from "./pages/mainpages/ChartOfAccounts";

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
        <Route path="/" element={<Login />} />
        
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/navigation"
          element={
            <Layout>
              <NavigationPage/>
            </Layout>
          }
        />

        <Route
          path="/chart-of-accounts"
          element={
            <Layout>
              <ChartOfAccounts/>
            </Layout>
          }
        
        />
      </Routes>
    </Router>
  );
};

export default App;
