
import { useQuery } from "react-query" ;

import { serviceKeys } from "@rq_keys/serviceKeys"
import { 
         fetch_Account_All_Services , 
         fetch_Service_By_Id , 
         fetch_Service_Price_By_Id , 
         fetch_Account_Date_Service_Orders ,
         fetch_Account_Date_Service_Appointments 
       } from "@api/api_Service"



// 取得 _ 特定店家，所有服務 : 項目
export const useFetch_Account_All_Services = () => {


    // 預設值
    const fallback = [] as any[] ; 
  
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                          serviceKeys.account_all_service_items() ,
                                          () => fetch_Account_All_Services()
                                        ) ; 
  
                                        
    return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
  
    
  }



// 取得 _ 特定店家，特定日期 _ 服務訂單
export const useFetch_Account_Date_Service_Orders = ( service_Date : string ) => {

  // 預設值
  const fallback = [] as any[] ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        serviceKeys.account_date_service_orders( service_Date ) ,
                                        () => fetch_Account_Date_Service_Orders( service_Date ) , 
                                        { enabled : !!service_Date }
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}





// 取得 _ 特定店家，特定日期 _ [ 預約 ] 服務訂單
export const useFetch_Account_Date_Service_Appointments = ( service_Date : string ) => {

  // 預設值
  const fallback = [] as any[] ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        serviceKeys.account_date_service_appointments( service_Date ) ,
                                        () => fetch_Account_Date_Service_Appointments( service_Date ) , 
                                        { enabled : !!service_Date }
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}



// 取得 _ 特定服務 : 項目
export const useFetch_Service_By_Id = ( service_Id : string ) => {

  // 預設值
  const fallback = { service_content : [] } ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        serviceKeys.service_by_id( service_Id ) ,
                                        () => fetch_Service_By_Id( service_Id ) , 
                                        { enabled : !!service_Id }
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}





// 取得 _ 特定服務 : 價格
export const useFetch_Service_Price_By_Id = ( price_Id : string ) => {

  // 預設值
  const fallback = {} ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        serviceKeys.service_price_by_id( price_Id ) ,
                                        () => fetch_Service_Price_By_Id( price_Id ) , 
                                        { enabled : !!price_Id }
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}

  
  