
import { FC , useState } from 'react' ;
import { useEffect_Pet_FirstClass_Data , useEffect_Pet_SecodeClass_Data  } from "./useEffect_PetClass_Data" ;
import { Class_Container } from '@/utils/custom_types/form';
import { Class_Container_Service , FirstClass_Options_Setting_Service , SecondClass_Options_Setting_Service , Class_Input_Service } from "@service/index" ;



// @ 分類設定 > 寵物
const Pet_Management_Service : FC = () => {


        // 設定 _ 種類
        const [ pet_Class , set_Pet_Class ] = useState< any >() ;

         
        const { 

                all_Pet_Classes ,      // 所有寵物：種類 

                methods_class , 
                onSubmit_class ,  

                click_Delete_Class 

            } = useEffect_Pet_FirstClass_Data() ;


        const { 

                all_Pet_Species ,     // 所有寵物 : 品種 ( 相應於目前所選擇的寵物種類 )

                methods_species ,  
                onSubmit_species , 
                
                click_Delete_Species 
                
            } = useEffect_Pet_SecodeClass_Data( pet_Class?.id ) ;
 

    // 轉換欄位 : 第一層分類        
    const convert_First_Class = ( x : any ) => {

      const first_Class       = x?.pet_class ;         // 寵物種類
      const first_Class_Id    = x?.id ;                // 寵物種類 id
      const second_Class_Num  = x?.pet_species?.length // 寵物種類x        
    
      return { first_Class , first_Class_Id , second_Class_Num  }
    
    } ;


    // 轉換欄位 : 第二層分類        
    const convert_Second_Class = ( x : any ) => x?.pet_species ;



    // 第一層類別 _ 選項
    const fist_Options = <FirstClass_Options_Setting_Service all_First_Classes   = { all_Pet_Classes }  
                                                             convert_First_Class = { convert_First_Class }
                                                             current_First_Class = { pet_Class?.pet_class }
                                                             set_First_Class     = { set_Pet_Class }
                                                             click_Delete_First  = { click_Delete_Class } />

    // 第一層類別 _ 輸入框
    const first_Input  = <Class_Input_Service  type = 'text' name = 'management_pet_class' label = '請輸入 _ 第一層分類' />                                                     


    // 第二層類別 _ 選項
    const second_Options = <SecondClass_Options_Setting_Service all_Second_Classes   = { all_Pet_Species } 
                                                                convert_Second_Class = { convert_Second_Class  }
                                                                click_Delete_Second  = { click_Delete_Species } />

     // 第二層類別 _ 輸入框
     const second_Input  = <Class_Input_Service  type = 'text' name = 'management_pet_species' label = '請輸入 _ 第二層分類' />


    // 整合所需資料物件        
    const obj : Class_Container = {

         first_Class : {

                          first_Class_Options : fist_Options ,
                          frist_Class_Input   : first_Input ,
                           
                          methods_First       : methods_class ,
                          onSubmit_First      : onSubmit_class ,

                        } ,

         second_Class : { 
                           
                           second_Class_Options : second_Options ,
                           second_Class_Input   : second_Input ,

                           methods_Second      : methods_species ,
                           onSubmit_Second     :  onSubmit_species ,

                         }

    }        


    return <Class_Container_Service { ...obj } />


} ;


export default Pet_Management_Service
        