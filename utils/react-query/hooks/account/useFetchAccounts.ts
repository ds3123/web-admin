

import { useQuery } from "react-query" ;
import { accountKeys } from "@rq_keys/accountKeys"
import { fetch_All_Accounts , fetch_All_Accounts_By_Zipcode } from "@/utils/api/api_Account";


// 取得 _ 所有店家帳號
export const useFetch_All_Accounts = ( ) => {


    // 預設值
    const fallback = [] as any[] ;  
    
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                          accountKeys.all_accounts , 
                                          () => fetch_All_Accounts() ,
                                          
                                        ) ; 
                                      
    return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
  
  }


// 取得 _ 特定郵遞區號下，所有店家帳號
export const useFetch_All_Accounts_By_Zipcode = ( zipcode : string ) => {


  // 預設值
  const fallback = [] as any[] ;  
  
  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                         accountKeys.all_accounts_by_zipcode( zipcode ) , 
                                        () => fetch_All_Accounts_By_Zipcode( zipcode ) ,
                                        { enabled : !!zipcode }
                                        
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  

}
  
  