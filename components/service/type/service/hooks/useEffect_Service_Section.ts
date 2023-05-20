
import { useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form' ;
import { UseFormReturn } from 'react-hook-form';



// # 區塊欄位 _ 是否顯示 : 寵物欄位 / 服務單欄位
export const useEffect_Service_Section = ( watch : UseFormReturn< useForm_ServiceOrder_With_Customer_Pet_Form >['watch'] ) => {


   // 客戶欄位
   const customer_Name   = watch( 'customer_name' ) ; 
   const customer_Mobile = watch( 'customer_mobile' ) ; 
   const customer_Sex    = watch( 'customer_sex' ) ;


   // 寵物欄位
   const pet_Name        = watch( 'pet_name' ) ;
   const pet_Class       = watch( 'pet_class' ) ;
   const pet_Species     = watch( 'pet_species' ) ;
   const pet_Sex         = watch( 'pet_sex' ) ;
   const pet_Serial      = watch( 'pet_serial' ) ;


   const is_Pet_Done     = customer_Name && customer_Mobile && ( customer_Sex && customer_Sex !== '請選擇' ) ;

   const is_Service_Done = pet_Name && 
                           pet_Serial &&
                          ( pet_Class && pet_Class !== '請選擇' ) && 
                          ( pet_Species && pet_Species !== '請選擇' ) &&
                          ( pet_Sex && pet_Sex !== '請選擇' ) ;




   if( is_Pet_Done && !is_Service_Done ) return { is_Show_Pet : true , is_Show_Srvice : false } ;
   if( is_Pet_Done && is_Service_Done ) return { is_Show_Pet : true , is_Show_Srvice : true } ;


   return { is_Show_Pet : false , is_Show_Srvice : false  } ;


} ;

export default useEffect_Service_Section
       

