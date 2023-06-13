import { createSlice , PayloadAction , createAsyncThunk } from '@reduxjs/toolkit';
import { Draft } from 'immer' 


// 關掉 _ 右側面板 ( for 非同步 )
export const close_Right_Panel = createAsyncThunk( 

                                    'layout/close' , 
                                    async ( _ , thunkAPI) => {

                                        // 先設定 _ 關掉面板動畫
                                        thunkAPI.dispatch( layoutSlice.actions.close_Panel_Animation() );
                                    
                                          // 300 ms 後，再關掉面板
                                          return new Promise( resolve => setTimeout( resolve , 300 ) );

                                        }
                                        
                                ) ;


interface LayoutState {
  
     // # 右側 _ 滑動面板
     is_Right_Panel_Open   : boolean ;
     right_Panel_Animation : string ;

     right_Panel_Component : null | JSX.Element ;
     right_Panel_Props     : {}

}

const initialState: LayoutState = {
  
    is_Right_Panel_Open   : false ,  // 是否開啟 
    right_Panel_Animation : '' ,     // 開啟、關閉效果動畫 

    right_Panel_Component : null ,   // 右側面板 _ 元素
    right_Panel_Props     : {}       // 右側面板 _ 屬性

};


const layoutSlice = createSlice({

    name : 'layout',

    initialState,

    reducers : {

        // # Actions

        // 開啟 _ 右側面板
        open_Right_Panel : ( state : Draft< LayoutState >  )  => {

            state.right_Panel_Animation = 'animate-slide-in' ;
            state.is_Right_Panel_Open   = true ; 

        } ,

        // 設定 _ 右側面板關閉動畫
        close_Panel_Animation : ( state : Draft< LayoutState > ) => {

            state.right_Panel_Animation = 'animate-slide-out' ;

        } ,

        // 設定 _ 右側面板 : 元素
        set_Right_Panel_Component : ( state : any , action : PayloadAction< JSX.Element | null > )  => {


           // 開啟 _ 右側面板 ( 與上面 open_Right_Panel 一樣 )
           state.right_Panel_Animation = 'animate-slide-in' ;
           state.is_Right_Panel_Open   = true ; 

           // 設定 _ 面板內元件
           state.right_Panel_Component = action.payload ;
            
        } 
      
    } ,

    // for Async
    extraReducers : {

      // 解析成功   
      [ close_Right_Panel.fulfilled as any ] : ( state ) => {

          // 關掉 _ 右側面板 
          state.is_Right_Panel_Open = false ;

      }

    }

});

export const { 
               open_Right_Panel , 
               set_Right_Panel_Component ,
             } = layoutSlice.actions ;


export default layoutSlice.reducer ;