// import { Card, Title, Text, LineChart, Select, SelectItem, DonutChart, BarChart } from "@tremor/react";

// const data = [
//   { date: "7/2", newClients: 1, loansDisbursed: 1 },
//   { date: "8/2", newClients: 2, loansDisbursed: 1 },
//   { date: "9/2", newClients: 1, loansDisbursed: 0 },
//   { date: "10/2", newClients: 3, loansDisbursed: 2 },
// ];

// const pieData1 = [
//   { name: "Pending", value: 5000 },
//   { name: "Disbursed", value: 10000 },
// ];

// const pieData2 = [
//   { name: "Collected", value: 8000 },
//   { name: "Remaining", value: 2000 },
// ];

// const barData = [
//   { category: "New Clients", count: 7 },
//   { category: "Loans Disbursed", count: 4 },
// ];

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

//       <input
//         type="text"
//         placeholder="Search Activity..."
//         className="w-full px-4 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
//       />

//       <Card className="bg-white shadow-md p-4">
//         <Title>Client Trends</Title>
//         <Text>Office</Text>
//         <Select className="mb-4">
//           <SelectItem value="head_office">Head Office</SelectItem>
//         </Select>

//         <LineChart
//           data={data}
//           index="date"
//           categories={["newClients", "loansDisbursed"]}
//           colors={["#2563eb", "#dc2626"]} 
//           yAxisLabel="Value"
//         />
//       </Card>

//       <Card className="bg-white shadow-md p-4 mt-6">
//         <Title>📊 Client Growth & Loans</Title>
//         <div className="tremor-base">
//           <BarChart
//             data={barData}
//             index="category"
//             categories={["count"]}
//             colors={["#2563eb"]} 
//             yAxisLabel="Total"
//           />
//         </div>
//       </Card>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         <Card className="bg-white shadow-md p-4">
//           <Title>💰 Amount Pending / Disbursed</Title>
//           <DonutChart 
//             data={pieData1} 
//             category="value" 
//             index="name" 
//             colors={["#f59e0b", "#10b981"]} 
//           />
//         </Card>

//         <Card className="bg-white shadow-md p-4">
//           <Title>💵 Amount Collected</Title>
//           <DonutChart 
//             data={pieData2} 
//             category="value" 
//             index="name" 
//             colors={["#3b82f6", "#6b7280"]} 
//           />
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      testing Dashboard
    </div>
  )
}

export default Dashboard
