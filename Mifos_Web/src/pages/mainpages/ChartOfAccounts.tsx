import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { FaTree } from "react-icons/fa6";
import MyBreadCrumb from "@/ShadCN/mycomponents/MyBreadCrumb";
import { DataTableDemo } from "@/ShadCN/mycomponents/DataTableDemo";
const accounts = [
    { name: "Cash", glCode: "1", type: "ASSET", disabled: false, manualEntries: true, usedAs: "DETAIL" },
    { name: "Caja y bancos", glCode: "10000", type: "ASSET", disabled: false, manualEntries: true, usedAs: "DETAIL" },
    { name: "Caja general", glCode: "100001", type: "ASSET", disabled: false, manualEntries: true, usedAs: "DETAIL" },
    { name: "Cuentas por cobrar", glCode: "100002", type: "ASSET", disabled: false, manualEntries: true, usedAs: "DETAIL" },
    { name: "Billets et monnaies", glCode: "101", type: "ASSET", disabled: false, manualEntries: false, usedAs: "HEADER" },
];

const ChartOfAccounts = () => {
    

    return (
        <div className="p-6">
            <nav className="text-gray-500 text-sm mb-4">
                <MyBreadCrumb />
            </nav>
            <DataTableDemo/>
        </div>

    );
};

export default ChartOfAccounts;
