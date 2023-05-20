
import { useFetch_Account_All_Plans , useFetch_Plan_By_Id } from "@/utils/react-query/hooks/plan/useFetchPlans" ;


import { useFetch_Account_All_Services , useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices" ;
import { useForm_Provider_Create_FirstClass_ServicePrice , useForm_Provider_Create_SecondClass_ServicePrice } from "@hooks/form/userForm_Provider" ;



/*

   # 價格設定 > 方案 : 分類資料

*/


// 第一層分類所需資料
export const useEffect_PlanPrice_FirstClass_Data = ( first_Class : any ) => {


   
     // 取得 _ 店家所有 : 自訂方案
     const { data : all_Plans } = useFetch_Account_All_Plans() ;


     // RHF 相關方法
     // const { methods : methods_first , onSubmit : onSubmit_first } = useForm_Provider_Create_Plan( all_Plans ) ;



    // return { all_Plans , methods_first , onSubmit_first  }

}



// 第二層分類所需資料
export const useEffect_PlanPrice_SecondClass_Data = ( first_Class_Id : string , second_Class : any ) => {

    
     // 目前所點選 _ 服務第一層分類
     const { data : first_Classes } = useFetch_Plan_By_Id( first_Class_Id ) ;


     // 相對應 _ 服務第二層分類
     const second_Classes = first_Classes?.plan_content ;

     // 方案可用次數
     const plan_Count     = first_Classes?.count ;

 
 
     // RHF 相關方法
     // const { methods : methods_second , onSubmit : onSubmit_second } = useForm_Provider_Create_Plan_Content( first_Class_Id , second_Classes , plan_Count ) ;
 
 

     // return { second_Classes , methods_second , onSubmit_second  }



}