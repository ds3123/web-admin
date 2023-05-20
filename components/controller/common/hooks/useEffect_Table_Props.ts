import { useEffect_Pagination_Table_State } from '@service/common/hooks/useEffect_Table' ;
import { Table_Title_Columns } from '@service/common/config/table' ;
import { I_Table } from '@/utils/custom_types/layout';


// Query Key
import { customerKeys } from "@rq_keys/customerKeys" ; 
import { petKeys } from "@rq_keys/petKeys" ; 
import { serviceKeys } from "@rq_keys/serviceKeys" ; 


// Query Api
import { fetch_Account_All_Customers } from "@api/api_Customer" ;
import { fetch_Account_All_Pets } from "@api/api_Pet" ;
import { fetch_Account_All_Service_Orders } from "@api/api_Service" ;




type data_Types = 'customer' | 'pet' | 'service' ;


// 依照資料類型，取得相對應 _ Query Key & Api
const map_Query = ( data_Types : data_Types , current_Page : number , search : string ) : any => {

    let query_Key ;
    let query_Api ;

    // 客人  
    if( data_Types === 'customer' ){
        query_Key = customerKeys.account_all_customers( current_Page ) ;         
        query_Api = () => fetch_Account_All_Customers( current_Page , search ) ; 
    }  

    // 寵物
    if( data_Types === 'pet' ){
        query_Key = petKeys.account_all_pets( current_Page ) ;         
        query_Api = () => fetch_Account_All_Pets( current_Page , search ) ; 
    }  

    // 服務 ( 訂單 )
    if( data_Types === 'service' ){
        query_Key = serviceKeys.account_all_service_orders( current_Page ) ;         
        query_Api = () => fetch_Account_All_Service_Orders( current_Page , search ) ; 
    }  

    return { query_Key , query_Api }

} ;




// 整理回傳 _ 分頁表單所需要的 props
export const useEffect_Table_Props = ( data_Types : data_Types ) : I_Table => {

    // 目前頁碼、查詢關鍵字
    const { current_Page , set_CurrentPage  , search , set_Search } = useEffect_Pagination_Table_State() ;

    // Query Key & Api
    const { query_Key , query_Api } = map_Query( data_Types , current_Page , search ) ;


    return {

                // 差異
                title_Columns   : Table_Title_Columns[ data_Types ] ,  // 表單欄位名稱
                query_Key       : query_Key ,
                query_Api       : query_Api ,

                // 相同
                search          : search ,
                set_Search      : set_Search ,
                current_Page    : current_Page ,
                set_CurrentPage : set_CurrentPage , 
      
            }


} ;


