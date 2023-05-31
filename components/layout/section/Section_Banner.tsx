
import { FC } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout" ;
import { Create_Button } from "@layout/index" ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;
import { Create_Customer_Form ,
         Create_Pet_Form ,
         Create_Service_Order_Form ,
         Create_Product_Form ,
      } from "@service/index" ;
import { User_Info_Service } from "@service/index" ;



type Type = '客戶' | '寵物' | '服務訂單' | '商品' | '商品訂單' | undefined ;

interface T_Section_Banner extends T_Section {

   create_Type? : Type ;  // 新增按鈕類型 ( Ex. 客戶 / 商品 ... )

} 
 

// 根據新增類型，回傳相對應元件
const get_Create_Component = ( type : Type ) => {

     if( type === '客戶' )    return <Create_Customer_Form />
     if( type === '寵物' )    return <Create_Pet_Form />
     if( type === '服務訂單' ) return <Create_Service_Order_Form />
     if( type === '商品' )    return <Create_Product_Form />
    
     return null

} ;



// ＠ 各個區塊標題 Banner
const Section_Banner : FC< T_Section_Banner > = ( props ) => {


    const dispatch = useDispatch< AppDispatch >()
    const btn_Type = props.create_Type ;


    // 依照資料類別，取得 _ 相對應新增表單元件 
    const create_Component = get_Create_Component( btn_Type ) ;
    
    // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
    const click_Add_Btn = () => dispatch( set_Right_Panel_Component( create_Component ) ) ;
     

    return <div className = "flex bg-white px-6 py-8 relative">

                <div className = "mr-4" >
                   <User_Info_Service /> 
                </div>

                { /* 子元件 */ }
                <div >

                   { props.children }  

                </div>

                { /* 新增按鈕 */ }
                { btn_Type && 

                   <Create_Button onClick = { () => click_Add_Btn() } buttonType = { btn_Type }/>
                   
                } 

           </div>   


} ;

export default Section_Banner
       