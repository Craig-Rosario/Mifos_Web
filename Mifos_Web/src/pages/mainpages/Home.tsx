import {useNavigate } from "react-router-dom";
import Mifos_Logo from "@/assets/images/mifos_lg-logo.png";
import { FaTachometerAlt } from "react-icons/fa";


const Home = () => {
    const navigate=useNavigate();
    
    const handleDashboard=()=>{
        navigate("/dashboard");
    };


    return (
    <div className="relative min-h-screen bg-gray-100 px-4 flex flex-col items-center justify-start pt-24">
      <h1 className="absolute top-6 left-6 text-xl font-semibold text-gray-700">
        Welcome to Mifos Home!
      </h1>

      <img
        src={Mifos_Logo}
        alt="Mifos Logo"
        className="h-40 mt-10 mb-6 drop-shadow-lg"
      />

      <div className="w-full max-w-xl">
        <input
          type="text"
          placeholder="Search Activity..."
          className="w-full px-6 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <button className="flex items-center gap-2 mt-6 px-6 py-2 bg-[#76C47A] text-white rounded-lg shadow hover:bg-[#22B24C] transition cursor-pointer" onClick={handleDashboard}>
        <FaTachometerAlt/>Dashboard
      </button>
    </div>
  );
};

export default Home;
