

import { useFetch_Account_All_Plans , useFetch_Plan_By_Id } from "@/utils/react-query/hooks/plan/useFetchPlans"
import { useForm_Provider_Create_Plan ,  useForm_Provider_Create_Plan_Content } from "@/hooks/form/userForm_Provider";

import { useDelete_Plan , useDelete_Plan_Content } from "@/utils/react-query/hooks/plan/useDeletePlan";



/*

   # 分類設定 > 方案 : 分類資料

*/



// 第一層分類所需資料
export const useEffect_Plan_FirstClass_Data = () => { 


     // 取得 _ 店家所有 : 自訂方案
     const { data : all_Plans } = useFetch_Account_All_Plans() ;


     // RHF 相關方法
     const { methods : methods_first , onSubmit : onSubmit_first } = useForm_Provider_Create_Plan( all_Plans ) ;


     // 點選 _ 刪除 : 第一層分類
     const click_Delete_First_Class = useDelete_Plan() ;


     return { all_Plans , methods_first , onSubmit_first , click_Delete_First_Class }


}



// 第二層分類所需資料
export const useEffect_Plan_SecodeClass_Data = ( first_Class_Id : string ) => {


     // 目前所點選 _ 服務第一層分類
     const { data : first_Classes } = useFetch_Plan_By_Id( first_Class_Id ) ;


     // 相對應 _ 服務第二層分類
     const second_Classes = first_Classes?.plan_content ;

     // 方案可用次數
     const plan_Count     = first_Classes?.count ;

 
 
     // RHF 相關方法
     const { methods : methods_second , onSubmit : onSubmit_second } = useForm_Provider_Create_Plan_Content( first_Class_Id , second_Classes , plan_Count ) ;
 
 
     // 點選 _ 刪除 : 第二層分類 
     const click_Delete_Second_Class = useDelete_Plan_Content() ;
 
 
     return { second_Classes , methods_second , onSubmit_second , click_Delete_Second_Class }








}