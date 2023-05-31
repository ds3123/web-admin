
import { useEffect_Service_FirstClass_Data , useEffect_Service_SecodeClass_Data } from "@service/type/management/setting/service/useEffect_ServiceClass_Data" ;
import { FirstClass_Options_Setting_Service , SecondClass_Options_Setting_Service , Class_Multi_Input_Service } from "@service/index" ;
import { FormProvider } from "react-hook-form" ;
import { Class_Form_Service } from "@service/index" ;  
import { Multi_Input_Column } from '@/utils/custom_types/form';
import { useSelector } from 'react-redux' ;
import { RootState  } from '@store/store' ;



// # 管理區 > 分類價格 > 服務
const Service_Management_Service = () => {


    // 目前所點選 _ 第一層服務
    const currentFirstClass = useSelector( ( state : RootState ) => state.management_class.current_First_Class ) ;


    // # 第一層分類
    const { 

            all_Services ,             // 所有服務 

            methods_first , 
            onSubmit_first ,  
            
            convert_First_Class ,    // 轉換欄位    
            click_Delete_First_Class // 刪除分類

          } = useEffect_Service_FirstClass_Data() ;


    // # 第二層分類
    const { 

            second_Classes ,            // 所有服務 : 內容 

            methods_second ,  
            onSubmit_second , 

            convert_Second_Class ,      // 轉換欄位  
            click_Delete_Second_Class , // 刪除分類

          } = useEffect_Service_SecodeClass_Data() ;

    
    // 自訂方案 _ 欄位 : 第一層分類
    const first_Input_Arr : Multi_Input_Column[] = [
        
       { label : "請輸入 _ 第一層分類" , type : "text" , name : 'management_service_first_class' , require : true , span : "col-span-2"  } ,  
       { label : "價 格" , type : "number"  , name : 'management_service_first_class_price'  , require : false , span : "col-span-1"  } ,  
      
    ] ;


    // 自訂方案 _ 欄位 : 第二層分類
    const second_Input_Arr : Multi_Input_Column[] = [
        
       { label : "請輸入 _ 第二層分類" , type : "text" , name : 'management_service_second_class' , require : true , span : "col-span-2" } ,  
       { label : "價 格" , type : "number" , name : 'management_service_second_class_price' , require : false , span : "col-span-1" } ,  
      
    ] ;

          
    return <div className = "max-w-7xl mx-auto" >
              
              <FormProvider { ...methods_first } >  
                  
                  <Class_Form_Service onSubmit = { onSubmit_first } class_label = '第一層分類' >

                      { /* 類別選項 */ }
                      <FirstClass_Options_Setting_Service all_First_Classes   = { all_Services }  
                                                          click_Delete_First  = { click_Delete_First_Class }
                                                          convert_First_Class = { convert_First_Class } />                            
                      
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
                                                                 click_Delete_Second  = { click_Delete_Second_Class } 
                                                                 convert_Second_Class = { convert_Second_Class } />

                            { /* 輸入框 */ }
                            <Class_Multi_Input_Service data = { second_Input_Arr } />

                        </Class_Form_Service>

                    </FormProvider> 
              
                 </> 
              
              }

           </div>

} ;


export default Service_Management_Service
       

