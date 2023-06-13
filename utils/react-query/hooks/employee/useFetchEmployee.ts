
import { useQuery } from "react-query" ;
import { employeeKeys } from "@rq_keys/employeeKeys" ; 
import { fetch_Account_All_Employees } from "@api/api_Employees"





// 取得 _ 特定店家，所有員工
export const useFetch_Account_All_Employees = () => {


    // 預設值
    const fallback = [] as any[] ; 
  
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                            employeeKeys.account_all_employees() ,
                                          () => fetch_Account_All_Employees()
                                        ) ; 
  
                                        
    return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
  
    
}