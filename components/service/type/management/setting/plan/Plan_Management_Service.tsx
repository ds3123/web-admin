

import { useState } from 'react' ;
import { useEffect_Plan_FirstClass_Data , useEffect_Plan_SecodeClass_Data } from "./useEffect_PlanClass_Data" ;
import { 
         Class_Container_Service , 
         SecondClass_Options_Setting_Service , 
         FirstClass_Options_Plan_Service ,
         Class_Input_Service ,
         Class_Multi_Input_Service
        } from "@service/index" ;
import { Class_Container , Multi_Input_Column } from '@/utils/custom_types/form';



// @ 分類設定 > 服務
const Plan_Management_Service = () => {


     // 設定 _ 第一層分類
     const [ first_Class , set_First_Class ] = useState< any >() ;

     const { 

        all_Plans ,      

        methods_first , 
        onSubmit_first ,  

        click_Delete_First_Class 

    } = useEffect_Plan_FirstClass_Data() ;


    const { 

        second_Classes ,     // 所有寵物 : 品種 ( 相應於目前所選擇的寵物種類 )

        methods_second ,  
        onSubmit_second , 

        click_Delete_Second_Class 
        
    } = useEffect_Plan_SecodeClass_Data( first_Class?.id ) ;


   

    // 轉換欄位 : 第二層分類        
    const convert_Second_Class = ( x : any ) => x?.content ;



    // 自訂方案 _ 欄位 : 第一層分類
    const first_Input_Arr : Multi_Input_Column[] = [
        
                              { label : "方案名稱"        , type : "text"    , name : 'management_plan_name'  , require : true , span : "col-span-2"  } ,  
                              { label : "使用次數 ( 次 )" , type : "number"  , name : 'management_plan_count'  , require : true , span : "col-span-1"  } ,  
                              { label : "使用期限 ( 天 )" , type : "number"  , name : 'management_plan_period' , require : true , span : "col-span-1"  } ,  
                              { label : "方案備註"        , type : "text"    , name : 'management_plan_note'   , require : false  , span : "col-span-3" } ,  
                            
                            ] ;

    // -------------------------------------------


    // 第一層類別 _ 選項
    const fist_Options = <FirstClass_Options_Plan_Service all_First_Classes   = { all_Plans }  
                                                          current_First_Class = { first_Class?.name }
                                                          set_First_Class     = { set_First_Class }
                                                          click_Delete_First  = { click_Delete_First_Class } />


     // 第一層類別 _ 輸入框
     const first_Input  = <Class_Multi_Input_Service data = { first_Input_Arr } />



     // 第二層類別 _ 選項
     const second_Options = <SecondClass_Options_Setting_Service all_Second_Classes   = { second_Classes }
                                                                 convert_Second_Class = { convert_Second_Class } 
                                                                 click_Delete_Second  = { click_Delete_Second_Class } />

     // 第二層類別 _ 輸入框
     const second_Input  = <Class_Input_Service  type = 'text' name = 'management_plan_content_name' label = '請輸入 _ 第二層分類' />




    // 整合所需資料物件        
    const obj : Class_Container = {

        first_Class : {
                      
                         first_Class_Options : fist_Options ,
                         frist_Class_Input   : first_Input ,
                       
                          methods_First       : methods_first ,
                          onSubmit_First      : onSubmit_first 

                       } ,

        second_Class : { 
                        
                         second_Class_Options : second_Options ,
                         second_Class_Input   : second_Input ,
                       
                         methods_Second       : methods_second ,
                         onSubmit_Second      : onSubmit_second 
                        
                        }

      } ;    
      

      
        
    return <Class_Container_Service { ...obj } />



} ;

export default Plan_Management_Service
       