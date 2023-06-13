


// Query Key
import { customerKeys } from "@rq_keys/customerKeys" ; 
import { petKeys } from "@rq_keys/petKeys" ; 
import { serviceKeys } from "@rq_keys/serviceKeys" ; 


// Query Api
import { fetch_Account_All_Customers } from "@api/api_Customer" ;
import { fetch_Account_All_Pets } from "@api/api_Pet" ;
import { fetch_Account_All_Service_Orders } from "@api/api_Service" ;


import { useSelector } from 'react-redux';
import { RootState  } from '@store/store' ;
import { T_Api_Data } from "@/utils/custom_types/string";




// # Map : 依照資料類型，取得對應的查詢 Api , Key
export const useEffect_Map_Query = ( data_Types : T_Api_Data ) => {


    // 目前搜尋關鍵字
    const search_Keyword = useSelector( ( state: RootState ) => state.pagination.search_Keyword ) ; 

    // 目前頁碼
    const current_Page   = useSelector( ( state: RootState ) => state.pagination.current_Page ) ; 


    let query_Key ;
    let query_Api ;

    // 客人  
    if( data_Types === 'customer' ){
        query_Key = customerKeys.account_all_customers( current_Page ) ;         
        query_Api = () => fetch_Account_All_Customers( current_Page , search_Keyword ) ; 
    }  

    // 寵物
    if( data_Types === 'pet' ){
        query_Key = petKeys.account_all_pets( current_Page ) ;         
        query_Api = () => fetch_Account_All_Pets( current_Page , search_Keyword ) ; 
    }  

    // 服務 ( 訂單 )
    if( data_Types === 'service' ){
        query_Key = serviceKeys.account_all_service_orders( current_Page ) ;         
        query_Api = () => fetch_Account_All_Service_Orders( current_Page , search_Keyword ) ; 
    }  

    return { query_Key , query_Api }



} ;