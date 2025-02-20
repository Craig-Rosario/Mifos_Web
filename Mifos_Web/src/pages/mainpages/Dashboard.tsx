import MyChart from "@/ShadCN/mycomponents/MyChart";
import { MyPieChart } from "@/ShadCN/mycomponents/MyPieChart";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 px-6 py-4 flex flex-col gap-6">
      <div className="w-full bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Client Trends</h2>
          <p className="text-sm">Office <br /> <strong>Head Office</strong></p>
        </div>
        <div className="p-6">
          <MyChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Amount Pending</h3>
            <p className="text-sm">Office <br /> <strong>Head Office</strong></p>
          </div>
          <MyPieChart/>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Amount Collected</h3>
            <p className="text-sm">Office <br /> <strong>Head Office</strong></p>
          </div>
          <MyPieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
