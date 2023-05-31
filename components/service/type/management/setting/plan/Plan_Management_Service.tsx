
import { useEffect_Plan_FirstClass_Data , useEffect_Plan_SecodeClass_Data } from "./useEffect_PlanClass_Data" ;
import { 
         Class_Container_Service , 
         SecondClass_Options_Setting_Service , 
         FirstClass_Options_Plan_Service ,
         Class_Form_Service ,
         Class_Input_Service ,
         Class_Multi_Input_Service
        } from "@service/index" ;

import { Multi_Input_Column } from '@/utils/custom_types/form';
import { FormProvider } from "react-hook-form" ;
import { useSelector } from 'react-redux' ;
import { RootState  } from '@store/store' ;


// @ 分類設定 > 服務
const Plan_Management_Service = () => {


    // 目前所點選 _ 第一層服務
    const currentFirstClass = useSelector( ( state : RootState ) => state.management_class.current_First_Class ) ;
    

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

        click_Delete_Second_Class , 

        convert_Second_Class
        
    } = useEffect_Plan_SecodeClass_Data() ;


    // 自訂方案 _ 欄位 : 第一層分類
    const first_Input_Arr : Multi_Input_Column[] = [
        
            { label : "方案名稱"        , type : "text"    , name : 'management_plan_name'  , require : true , span : "col-span-2"  } ,  
            { label : "使用次數 ( 次 )" , type : "number"  , name : 'management_plan_count'  , require : true , span : "col-span-1"  } ,  
            { label : "使用期限 ( 天 )" , type : "number"  , name : 'management_plan_period' , require : true , span : "col-span-1"  } ,  
            { label : "方案備註"        , type : "text"    , name : 'management_plan_note'   , require : false  , span : "col-span-3" } ,  
                            
         ] ;

          
    return <div className = "max-w-7xl mx-auto" >
              
              <FormProvider { ...methods_first } >  
                  
                  <Class_Form_Service onSubmit = { onSubmit_first }  class_label = '第一層分類' >

                      { /* 類別選項 */ }
                      <FirstClass_Options_Plan_Service all_First_Classes   = { all_Plans }  
                                                          click_Delete_First  = { click_Delete_First_Class } />                      
                      
                      
                      { /* 輸入框 */ }
                      <Class_Multi_Input_Service data = { first_Input_Arr } />

                  </Class_Form_Service>

              </FormProvider> 

           { currentFirstClass && 
           
                <>

                    <hr className = "my-20 border" />

                    <FormProvider { ...methods_second } >  
                        
                        <Class_Form_Service onSubmit = { onSubmit_second }  class_label = '第二層分類' >

                            { /* 類別選項 */ }
                            <SecondClass_Options_Setting_Service all_Second_Classes   = { second_Classes }
                                                                    convert_Second_Class = { convert_Second_Class } 
                                                                    click_Delete_Second  = { click_Delete_Second_Class } />
                        
                            

                            { /* 輸入框 */ }
                            <Class_Input_Service  type = 'text' name = 'management_plan_content_name' label = '請輸入 _ 第二層分類' />
                            

                        </Class_Form_Service>

                    </FormProvider> 
           
                </>

           }  

             

          </div>
              




} ;

export default Plan_Management_Service
       