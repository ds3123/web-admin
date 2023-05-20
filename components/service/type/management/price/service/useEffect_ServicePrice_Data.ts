import { useFetch_Account_All_Services , useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices";

import { useForm_Provider_Create_FirstClass_ServicePrice , useForm_Provider_Create_SecondClass_ServicePrice } from "@hooks/form/userForm_Provider" ;



/*

   # 價格設定 > 服務 : 分類資料

*/


// 第一層分類所需資料
export const useEffect_ServicePrice_FirstClass_Data = ( first_Class : any ) => {


    // 取得 _ 店家所有 : 服務項目
   const { data : all_Services } = useFetch_Account_All_Services() ;


   // RHF 相關方法
   const { methods : methods_first , onSubmit : onSubmit_first } = useForm_Provider_Create_FirstClass_ServicePrice( first_Class ) ;


   return {  all_Services , methods_first , onSubmit_first }


}



// 第二層分類所需資料
export const useEffect_ServicePrice_SecondClass_Data = ( first_Class : any , second_Class : any ) => {

    // 目前所點選 _ 服務第一層分類
    const { data : first_Classes } = useFetch_Service_By_Id( first_Class?.id ) ;


    // 相對應 _ 服務第二層分類
    const second_Classes = first_Classes?.service_content as any ; 


    // RHF 相關方法
    const { methods : methods_second , onSubmit : onSubmit_second } = useForm_Provider_Create_SecondClass_ServicePrice( first_Class , second_Class ) ;


    return { second_Classes , methods_second , onSubmit_second  }

}