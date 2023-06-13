

import { useQuery } from "react-query" ;

import { useEffect_Map_Query } from "@service/common/hooks/useEffect_Map_Query" ;
import { T_Api_Data } from "@/utils/custom_types/string";





// 取得 _ 特定店家、類別 ( Ex 客人 )，列表所有資料
export const useFetch_Account_Table_All_Data = ( data_Type : T_Api_Data ) => {



    // 取得 _ 查詢資料所需的 Query Key & Api
    const { query_Key , query_Api } = useEffect_Map_Query( data_Type ) as any ;


    // 預設值
    const fallback = {} as any ;  
 
    const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } 
                         = useQuery( query_Key , query_Api ) ; 

    const page_Data      = data?.per_page_data ;  // 每頁資料數
    const page_Btn_Num   = data?.page_btn_num ;   // 分頁按鈕數
    const total_data_sum = data?.total_data_sum ; // 資料總筆數
          

    return { page_Data , page_Btn_Num  , total_data_sum , isLoading , isFetching  , isError , error , isPreviousData , refetch }  
 

}