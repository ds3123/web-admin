
import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';



const store = configureStore({

     reducer : rootReducer ,

     /*
        關閉序列化檢查 (serializableCheck: false )，以消除 _ 因直接將元件輸入作為 action 參數，console 所產生的錯誤訊息

         Ex. 
             set_Right_Panel_Component( state : any , action : PayloadAction< JSX.Element | null > ) 
     
            若有引發潛在問題，再回復 2023.04.15  

     */ 
     middleware : ( getDefaultMiddleware ) => 
                     getDefaultMiddleware({ serializableCheck: false  }),

});


export type RootState   = ReturnType< typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

export default store;