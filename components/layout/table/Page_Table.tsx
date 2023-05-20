/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' ;
import { Page_Button_Nav } from "@layout/index" ;
import { Table_ShopInfo_Service , Table_ShopSearch_Service , Table_DataSign_Service  } from '@service/index' ;
import { useFetch_Account_Table_All_Data } from "@rq_hooks/common/useFetch" ; 
import { I_Table_Children } from '@/utils/custom_types/layout' ;
import { useEffect_Pagination_Table_Refetch  } from '@service/common/hooks/useEffect_Table' ;





// ＠ 資料表單 ( 含頁碼 )
const Page_Table : FC< I_Table_Children > = ( props ) => {

   
    const { title_Columns , query_Key , query_Api , search , set_Search ,  current_Page , set_CurrentPage } = props ;


    // 查詢 _ 列表資料 
    const { page_Data , page_Btn_Num , total_data_sum , isFetching , refetch } = useFetch_Account_Table_All_Data( query_Key , query_Api ) ;




    // 清除搜尋框後，重新取得、恢復資料
    useEffect_Pagination_Table_Refetch( search , refetch )
    

    return <div className = "bg-white p-7 mt-[2px] min-h-screen" >

             { /* 導覽列 */ }
             <div className = "flex items-center justify-between mt-8" >

                { /* 店家資訊 */ }
                <Table_ShopInfo_Service total_data_sum = { total_data_sum } />
               
                { /* 搜尋輸入框 */ }
                <Table_ShopSearch_Service refetch = { refetch } search = { search } set_Search = { set_Search } />

             </div>

             { /* 資料表單 */ }
             <div className = "min-h-[830px] flex items-center justify-center relative" >


                { /* 各種資料狀態說明 : 下載中、未搜尋到資料、目前尚未新增資料 */ } 
                <Table_DataSign_Service isFetching = { isFetching } search = { search } total_data_sum = { total_data_sum }  />
                

                { /* 資料表單 */ }  
                { 
                  ( !isFetching && total_data_sum !== 0 ) &&

                     <table className = 'table-auto w-full mt-8 mb-8 absolute top-0' >

                          <thead className="border-b-2 text-lg">
                             <tr>{ title_Columns?.map( ( title , index ) =>  <th key = { index } className = "px-5 py-3"> { title } </th> ) }</tr>   
                          </thead>

                          <tbody>
                             { props.children( page_Data ) }
                          </tbody>

                     </table> 
                 }   

             </div>
           

             { /* 分頁頁碼 */ }
             { ( !isFetching && total_data_sum !== 0 ) &&

                <div className = "flex justify-center" >

                    <Page_Button_Nav pages_Sum     = { page_Btn_Num } 
                                     current_Page   = { current_Page  } 
                                     setPage        = { set_CurrentPage } 
                                     isPreviousData = { true } />

                </div>

            }
    
           </div>

} ;

export default Page_Table
       