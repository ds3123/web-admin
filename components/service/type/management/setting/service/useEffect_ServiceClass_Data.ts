
import { useFetch_Account_All_Services , useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices";
import { useForm_Provider_Create_Service , useForm_Provider_Create_Service_Content } from "@hooks/form/userForm_Provider" ;
import { useDelete_Service , useDelete_Service_Content } from "@utils/react-query/hooks/service/useDeleteService" ;


/*

   # 分類設定 > 服務 : 分類資料

*/


// 第一層分類所需資料
export const useEffect_Service_FirstClass_Data = () => {


     // 取得 _ 店家所有 : 服務項目
     const { data : all_Services } = useFetch_Account_All_Services() ;

     // RHF 相關方法
     const { methods : methods_first , onSubmit : onSubmit_first } = useForm_Provider_Create_Service( all_Services ) ;


     // 點選 _ 刪除 : 第一層分類
     const click_Delete_First_Class = useDelete_Service() ;

   
     return { all_Services , methods_first ,  onSubmit_first , click_Delete_First_Class }

} ;



// 第二層分類所需資料
export const useEffect_Service_SecodeClass_Data = ( first_Class_Id : string ) => {


    // 目前所點選 _ 服務第一層分類
    const { data : first_Classes } = useFetch_Service_By_Id( first_Class_Id ) ;


    // 相對應 _ 服務第二層分類
    const second_Classes = first_Classes?.service_content ;


    // RHF 相關方法
    const { methods : methods_second , onSubmit : onSubmit_second } = useForm_Provider_Create_Service_Content( first_Class_Id , second_Classes ) ;


    // 點選 _ 刪除 : 第二層分類 
    const click_Delete_Second_Class = useDelete_Service_Content() ;


    return { second_Classes , methods_second , onSubmit_second , click_Delete_Second_Class }
   

} ;






