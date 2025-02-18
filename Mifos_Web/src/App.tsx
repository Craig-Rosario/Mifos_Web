import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/ShadCN/mycomponents/AppSidebar";
import Login from "./pages/auth/Login";
import Home from "./pages/mainpages/Home";

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
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout>
              <div>test</div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
