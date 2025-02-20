
import MyBreadCrumb from "@/ShadCN/mycomponents/MyBreadCrumb";
import { DataTableDemo } from "@/ShadCN/mycomponents/DataTableDemo";


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
