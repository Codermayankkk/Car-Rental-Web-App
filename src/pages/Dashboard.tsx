import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import { userData } from "../store/actions/userDataActions";

ModuleRegistry.registerModules([AllCommunityModule]);

function Dashboard() {
    const dispatch = useDispatch();
    
    const data = useSelector((state:any) => state?.userDataReducer?.data);

    const [rowData, setRowData] = useState<any>([]);
    const [colDefs, _setColDefs] = useState<any>([
        { field: "name" },
        { field: "email" },
        { field: "body" },
    ]);
    const defaultColDef = {flex: 1};

    useEffect(() => {
        if(data){
            const finalData = data?.map((val:any) => ({
                name: val?.name,
                email: val?.email,
                body: val?.body,
            }))
            setRowData(finalData);
        }
    }, [data])

    const fetchData = () => {dispatch(userData(null, (status:number, response:any, _message:string) => {
        if(status === 200){
            console.log("MAYANK", response, status);
        }
    }))}

  return (
    <div>
        <button onClick={fetchData} className="px-[6px] text-[#fff] bg-blue-600 hover:bg-blue-700 rounded-[4px] transition duration-200">fetch data</button>
        <div className="mt-[10px] ag-theme-alpine w-full h-[500px]">
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    </div>
  )
}

export default Dashboard
