
import { FC } from 'react' ;
import Employee_List_Table from './Employee_List_Table';
import { useFetch_Account_All_Employees } from "@rq_hooks/employee/useFetchEmployee" ;




// # 管理區 > 員工設定
const Employee_Management_Service : FC = () => {


    // 取得 _ 特定店家，所有員工
    const { data } = useFetch_Account_All_Employees() ; 


    return <div data-testid = "Employee_Management_Service" >
 
              { /* 表單 */ }
              <div className = "flex justify-center" >

                  <Employee_List_Table data = { data } />
                   
              </div>

           </div>

} ;


export default Employee_Management_Service
       