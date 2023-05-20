/* eslint-disable react-hooks/exhaustive-deps */

import { useState , useEffect } from 'react' ;





// 分頁表單 _ 共同使用的 state
export const useEffect_Pagination_Table_State = () => {


    // 目前資料分頁頁碼
    const[ current_Page , set_CurrentPage ] = useState( 1 ) ;

    
    // 搜尋關鍵字
    const [ search , set_Search ] = useState( '' ) ;
    

    return {  current_Page , set_CurrentPage  , search , set_Search }


} ;




// 分頁表單 _ 清除搜尋框後，重新取得、恢復資料
export const useEffect_Pagination_Table_Refetch = ( search : string , refetch : any ) => {

    // 若清空搜尋框，恢復原先資料
    useEffect( () => {
      
        if( !search ) refetch() ;
       
    } , [ search ] ) ;

} ;

