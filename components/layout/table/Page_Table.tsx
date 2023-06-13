/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' ;
import { Page_Button_Nav , List_Table } from "@layout/index" ;
import { Table_ShopInfo_Service , Table_ShopSearch_Service , Table_DataSign_Service  } from '@service/index' ;
import { useFetch_Account_Table_All_Data } from "@rq_hooks/common/useFetch" ; 
import { useEffect_Search  } from "@service/common/hooks/useEffect_Search" ;
import { useEfffect_Pagination } from "@service/common/hooks/useEffect_Pagination" ;



interface Page_Table {
 
   data_Type : 'customer' | 'pet' | 'service' ;
   children  : ( data : any ) => JSX.Element ;

}



// ＠ 資料表單 ( 含頁碼 )
const Page_Table : FC< Page_Table > = ( { children , data_Type } ) => {
 

    
    // 查詢 _ 列表資料 
    const { page_Data , page_Btn_Num , total_data_sum , isFetching , refetch } = useFetch_Account_Table_All_Data( data_Type ) ;


    // 搜尋相關
    const { search_Keyword , handle_Set_Search_Keyword , handle_Click_Search } = useEffect_Search( refetch ) ;


    // 頁碼相關
    const { current_Page ,  click_Page_Button  } = useEfffect_Pagination() ;




    return <div data-testid = "Page_Table" className = "bg-white p-7 mt-[2px] min-h-screen" >

               { /* 導覽列 */ }
               <div className = "flex items-center justify-between mt-10" >

                   { /* 店家資訊 */ }
                   <Table_ShopInfo_Service total_data_sum = { total_data_sum } />
                  
                   { /* 搜尋輸入框 */ }
                   <Table_ShopSearch_Service set_Search = { handle_Set_Search_Keyword } handle_Click_Search = { handle_Click_Search } />

               </div>

               { /* 資料表單 */ }
               <div className = "min-h-[830px] flex items-center justify-center relative mt-16" >

                  { /* 各種資料狀態說明 : 下載中、未搜尋到資料、目前尚未新增資料 */ } 
                  <Table_DataSign_Service isFetching = { isFetching } search = { search_Keyword } total_data_sum = { total_data_sum }  />

                  { /* 資料表單 */ }  
                  { 

                     ( !isFetching && total_data_sum !== 0 ) &&

                         <List_Table type = { data_Type } > 

                              { children( page_Data ) }

                          </List_Table>

                  }   

               </div>
            

               { /* 分頁頁碼 */ }
               { ( !isFetching && total_data_sum !== 0 ) &&

                  <div className = "flex justify-center" >

                     <Page_Button_Nav pages_Sum      = { page_Btn_Num } 
                                      current_Page   = { current_Page  } 
                                      setPage        = { click_Page_Button } 
                                      isPreviousData = { true } />

                  </div>

               }
    
           </div>

} ;

export default Page_Table
       