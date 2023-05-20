
import { useQuery } from "react-query" ;

import { planKeys } from "@rq_keys/planKeys" ; 
import { fetch_Account_All_Plans , fetch_Plan_By_Id } from "@/utils/api/api_Plan"; 




// 取得 _ 特定店家，所有自訂方案
export const useFetch_Account_All_Plans = () => {


    // 預設值
    const fallback = [] as any[] ; 
  
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                           planKeys.account_all_plans() ,
                                          () => fetch_Account_All_Plans()
                                        ) ; 
  
                                        
    return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
  
    
}


// 取得 _ 特定店家，所有自訂方案
 export const useFetch_Plan_By_Id = ( plan_id : string ) => {


  // 預設值
  const fallback = {
                     count        : 0 ,  
                     plan_content : [] 
                    } as any ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                       planKeys.plan_by_id( plan_id ) ,
                                        () => fetch_Plan_By_Id( plan_id ) , 
                                        { enabled : !!plan_id }
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  







}
