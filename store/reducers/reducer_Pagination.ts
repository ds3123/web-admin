
import { createSlice , PayloadAction  } from '@reduxjs/toolkit';
import { Draft } from 'immer' 


interface PageState {
  
    // # 目前所點選 : 
    current_Page   : number ; // 目前頁碼
    search_Keyword : string ; // 搜尋關鍵字
   
}

 const initialState: PageState = {
  
    current_Page   : 1 , 
    search_Keyword : "" ,
  
};




const paginationSlice = createSlice({

    name : 'pagination',

    initialState,

    reducers : {

        // # Actions

        // 設定 _ 目前所點選 : 頁碼
        set_Current_Page : ( state : Draft< PageState > , action : PayloadAction< any >  )  => {

            state.current_Page = action.payload ;
           
        } ,

        // 設定 _ 目前所點選 : 頁碼
        set_Search_Keyword : ( state : Draft< PageState > , action : PayloadAction< any >  )  => {

            state.search_Keyword = action.payload ;
           
        } ,

      
      
    } ,

});

export const { 

               set_Current_Page ,  
               set_Search_Keyword
               
             } = paginationSlice.actions ;


export default paginationSlice.reducer ;