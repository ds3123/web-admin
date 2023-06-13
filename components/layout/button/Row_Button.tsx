
import { FC  } from 'react' ;
import { useDispatch } from 'react-redux' ; 
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;
import { T_Section } from '@/utils/custom_types/layout';
import { AppDispatch } from '@/store/store' ;



interface Row extends T_Section {
 
   component : JSX.Element | null ;

}


// # 表單列按鈕
const Row_Button : FC < Row > = ( { children , component } ) => {


    const dispatch = useDispatch< AppDispatch >() ;


    // 點選 _ 修改資料 ( 開啟、設定 _ 右側元件 )
    const click_Update_Btn = () =>  dispatch( set_Right_Panel_Component( component ) ) ;
 

    return <div className = "bg-purple-100 hover:bg-purple-200 py-3 my-2 rounded-lg text-center" >

              <p className = "text-md cursor-pointer tracking-wider" onClick = { () => click_Update_Btn() } > 
                           
                 { children } 
               
              </p>
        
           </div>

} ;


export default Row_Button
       