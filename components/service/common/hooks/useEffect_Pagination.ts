

import { useDispatch , useSelector } from 'react-redux';
import { AppDispatch , RootState  } from '@store/store' ;
import { set_Current_Page } from '@reducer/reducer_Pagination' ;




// # 資料頁碼相關 ( 表單資資料 ) 
export const useEfffect_Pagination = () => {


      const dispatch = useDispatch< AppDispatch >() ; 

      // 點選 _ 頁碼按鈕
      const click_Page_Button = ( currentPage : number ) =>  dispatch( set_Current_Page( currentPage ) ) ;
       
      
      // 目前頁碼
      const current_Page      = useSelector( ( state: RootState ) => state.pagination.current_Page ) ; 
  
    
      return { current_Page , click_Page_Button } 


} ;