
import { FC } from 'react' ;
import { FormProvider } from "react-hook-form" ;
import { Class_Form_Service } from "@service/index" ;

import { Class_Container } from '@/utils/custom_types/form';



// ＠ 分類容器
const Class_Container_Service : FC < Class_Container > = ( { first_Class , second_Class } ) => {

      // # 所需資料

      // 第 1 分類
      const { 

              first_Class_Options , // 第一層類別 _ 選項
              frist_Class_Input ,   // 第一層類別 _ 輸入框 
            
              methods_First ,  
              onSubmit_First ,  
             
            } = first_Class ;  
      
      
      // 第 2 分類 
      const { 

              second_Class_Options , // 第二層類別 _ 選項 
              second_Class_Input ,   // 第二層類別 _ 輸入框 

              methods_Second , 
              onSubmit_Second , 
              
            } = second_Class ; 


    return <div className = "max-w-7xl mx-auto" >

               <FormProvider { ...methods_First } >  
                    
                    <Class_Form_Service onSubmit = { onSubmit_First }  class_label = '第一層分類'  >
    
                       <div className = "mt-5 border-2 px-8 pt-8 pb-4" >
                         
                          { first_Class_Options }  { /* 類別選項 */ }

                       </div>    
                       
                          { frist_Class_Input }    { /* 輸入框 */ }
    
                    </Class_Form_Service>
    
               </FormProvider> 

             <hr className = "my-20 border-2" />

               <FormProvider { ...methods_Second } >  
                    
                    <Class_Form_Service onSubmit = { onSubmit_Second }  class_label = '第二層分類'   >
    
                        <div className = "mt-5 border-2 px-8 pt-8 pb-4" >

                           { second_Class_Options }  { /* 類別選項 */ }
                        
                        </div>

                        { second_Class_Input }      { /* 輸入框 */ }
    
                    </Class_Form_Service>
    
                </FormProvider> 
    
           </div>


} ;


export default Class_Container_Service
       