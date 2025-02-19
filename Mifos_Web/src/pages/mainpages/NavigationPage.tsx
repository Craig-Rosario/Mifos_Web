import React, { useState } from "react";

type OfficeType = "Head Office" | "Branch Office" | "Regional Office";

const offices: OfficeType[] = ["Head Office", "Branch Office", "Regional Office"];

const officers: Record<OfficeType, string[]> = {
  "Head Office": ["Test1", "Test2"],
  "Branch Office": ["Test3", "Test4"],
  "Regional Office": ["Test5", "Test6"],
};

const NavigationPage = () => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeType>("Head Office");
  const [selectedOfficer, setSelectedOfficer] = useState<string>(officers["Head Office"][0]);

  return (
    <div className="p-8 flex gap-8 justify-center">
      <div className="w-2/5 bg-white shadow-lg p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Office & Officer</h3>

        <label className="block text-gray-600 text-sm mb-2">Office</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={selectedOffice}
          onChange={(e) => {
            const newOffice = e.target.value as OfficeType;
            setSelectedOffice(newOffice);
            setSelectedOfficer(officers[newOffice][0]); 
          }}
        >
          {offices.map((office) => (
            <option key={office} value={office}>
              {office}
            </option>
          ))}
        </select>

        <label className="block text-gray-600 text-sm mt-6 mb-2">Officer</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={selectedOfficer}
          onChange={(e) => setSelectedOfficer(e.target.value)}
        >
          {officers[selectedOffice].map((officer) => (
            <option key={officer} value={officer}>
              {officer}
            </option>
          ))}
        </select>

        <p className="text-gray-500 mt-4 text-sm italic">No Associated Centers</p>
      </div>

      <div className="w-3/5 bg-white shadow-xl p-8 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="text-2xl">👤</span>
            {selectedOfficer}
          </h2>
          <span className="text-green-500 text-lg font-semibold">● Active</span>
        </div>

        <p className="text-gray-500 text-lg mt-1">Associated Office: <strong>{selectedOffice}</strong></p>

        <div className="mt-6 border-t pt-4">
          <p className="text-gray-700 py-2 text-xl">
            <strong>Joined On:</strong> 03 January 2023
          </p>
          <p className="text-gray-700 py-2 text-xl">
            <strong>Loan Officer:</strong> No
          </p>
          <p className="text-gray-700 py-2 text-xl">
            <strong>Number of Centers:</strong> 0
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
