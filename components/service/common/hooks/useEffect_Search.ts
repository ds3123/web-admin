/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import { AppDispatch , RootState  } from '@store/store' ;
import { set_Search_Keyword } from '@reducer/reducer_Pagination' ;




// # 搜尋框相關 ( 表單資資料 ) 
export const useEffect_Search = ( refetch : any )  => {


    const dispatch = useDispatch< AppDispatch >() ; 
   


    // 目前搜尋關鍵字
    const search_Keyword = useSelector( ( state: RootState ) => state.pagination.search_Keyword ) ; 


    // 設定 _ 搜尋關鍵字
    const handle_Set_Search_Keyword = ( keyword : string ) =>  dispatch( set_Search_Keyword( keyword ) ) ;


    // 點選 _ 搜尋鈕
    const handle_Click_Search = () => {

        if( search_Keyword ){ 
            
            refetch() ; // 重新取得資料
        
        }else{

            alert( "請輸入搜尋關鍵字" ) ;

        }
    
    } ;


    
     // 若清空搜尋框，恢復原先資料
     useEffect( () => {
      
        if( !search_Keyword ) refetch() ;
         
      } , [ search_Keyword ] ) ;
  


    return { search_Keyword , handle_Set_Search_Keyword , handle_Click_Search  }



} ;