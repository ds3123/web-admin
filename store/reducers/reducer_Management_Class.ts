import { createSlice , PayloadAction , createAsyncThunk } from '@reduxjs/toolkit';
import { Draft } from 'immer' 


interface ClassState {
  
    // # 目前所點選 : 
    current_First_Class  : any ; // 第一層分類
    current_Second_Class : any ; // 第二層分類

}

 const initialState: ClassState = {
  
    current_First_Class  : null , 
    current_Second_Class : null , 
 
};



const classSlice = createSlice({

    name : 'management_class',

    initialState,

    reducers : {

        // # Actions

        // 設定 _ 目前所點選 : 第一層分類
        set_Current_First_Class : ( state : Draft< ClassState > , action : PayloadAction< any >  )  => {

            state.current_First_Class = action.payload ;
           
        } ,

        // 設定 _ 目前所點選 : 第二層分類
        set_Current_Second_Class : ( state : Draft< ClassState > , action : PayloadAction< any >  )  => {

            state.current_Second_Class = action.payload ;
           
        } ,
      
    } ,

});

export const { 

               set_Current_First_Class , 
               set_Current_Second_Class
               
             } = classSlice.actions ;


export default classSlice.reducer ;