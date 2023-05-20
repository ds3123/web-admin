/* eslint-disable react/jsx-pascal-case */


import { useQuery } from "react-query" ;
import { customerKeys } from "@rq_keys/customerKeys" ; 
import { fetch_Customer_By_Id , fetch_Account_Customer_By_Mobile  } from "@api/api_Customer"



// 取得 _ 特定客戶 ( 資料表 id )
export const useFetch_Customer_By_Id = ( customer_id : string ) => {


  const { data , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        customerKeys.account_customer_by_id( customer_id ) , 
                                        () => fetch_Customer_By_Id( customer_id ) ,
                                        { enabled : !!customer_id }  // 有 customer_id 值，才進行查詢
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}



// 取得 _ 特定店家，特定客戶 ( 手機號碼 )
export const useFetch_Account_Customer_By_Mobile = ( mobile : string ) => {


  // 預設值
  const fallback = [] as any[] ;  
  
  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        customerKeys.account_customer_by_mobile( mobile ) , 
                                        () => fetch_Account_Customer_By_Mobile( mobile ) ,
                                        { enabled : !!mobile }  // 有 mobile 值，才進行查詢
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}







