

import { useQuery } from "react-query" ;
import { customerKeys } from "@rq_keys/accountKeys"
import { fetch_All_Accounts } from "@/utils/api/api_Account";


// 取得 _ 所有店家帳號
export const useFetch_All_Accounts = ( ) => {


    // 預設值
    const fallback = [] as any[] ;  
    
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                          customerKeys.all_accounts , 
                                          () => fetch_All_Accounts() ,
                                          
                                        ) ; 
                                      
    return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
  
  }
  
  