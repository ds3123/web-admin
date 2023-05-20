
import { useState } from 'react' ;
import { useEffect_Service_FirstClass_Data , useEffect_Service_SecodeClass_Data } from "@service/type/management/setting/service/useEffect_ServiceClass_Data" ;
import { Class_Container } from '@/utils/custom_types/form';
import { Class_Container_Service , FirstClass_Options_Setting_Service , SecondClass_Options_Setting_Service , Class_Input_Service } from "@service/index" ;



// @ 分類設定 > 服務
const Service_Management_Service = () => {


    // 設定 _ 第一層分類
    const [ first_Class , set_First_Class ] = useState< any >() ;

    const { 

            all_Services ,      // 所有寵物：種類 

            methods_first , 
            onSubmit_first ,  
            
            click_Delete_First_Class 

          } = useEffect_Service_FirstClass_Data() ;


    const { 

            second_Classes ,     // 所有寵物 : 品種 ( 相應於目前所選擇的寵物種類 )

            methods_second ,  
            onSubmit_second , 

            click_Delete_Second_Class 
            
          } = useEffect_Service_SecodeClass_Data( first_Class?.id ) ;



    // 轉換欄位 : 第一層分類          
    const convert_First_Class = ( x : any ) => {

        const first_Class       = x?.name ;                  // 服務名稱
        const first_Class_Id    = x?.id ;                    // 服務 id
        const second_Class_Num  = x?.service_content?.length // 寵物種類 x        
      
        return { first_Class , first_Class_Id , second_Class_Num }
    
    } ;


    // 轉換欄位 : 第二層分類        
    const convert_Second_Class = ( x : any ) => x?.content ;

      
    // 第一層類別 _ 選項
    const fist_Options = <FirstClass_Options_Setting_Service all_First_Classes   = { all_Services }  
                                                             convert_First_Class = { convert_First_Class }
                                                             current_First_Class = { first_Class?.name }
                                                             set_First_Class     = { set_First_Class }
                                                             click_Delete_First  = { click_Delete_First_Class } />
    // 第一層類別 _ 輸入框
    const first_Input  = <Class_Input_Service  type = 'text' name = 'management_service_first_class' label = '請輸入 _ 第一層分類' />


    
    // 第二層類別 _ 選項
    const second_Options = <SecondClass_Options_Setting_Service all_Second_Classes  = { second_Classes }
                                                                convert_Second_Class = { convert_Second_Class } 
                                                                click_Delete_Second = { click_Delete_Second_Class } />


    // 第二層類別 _ 輸入框
    const second_Input  = <Class_Input_Service  type = 'text' name = 'management_service_second_class' label = '請輸入 _ 第二層分類' />



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


export default Service_Management_Service
       

