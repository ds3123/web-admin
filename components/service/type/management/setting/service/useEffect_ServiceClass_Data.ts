
import { useFetch_Account_All_Services , useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices";
import { useForm_Provider_Create_Service , useForm_Provider_Create_Service_Content } from "@hooks/form/userForm_Provider" ;
import { useDelete_Service , useDelete_Service_Content } from "@utils/react-query/hooks/service/useDeleteService" ;
import { useSelector } from 'react-redux';
import {  RootState  } from '@store/store' ;


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


     // 轉換欄位 : 第一層分類          
     const convert_First_Class = ( x : any ) => {

        const first_Class       = x?.name ;                  // 服務名稱
        const first_Class_Id    = x?.id ;                    // 服務 id
        const second_Class_Num  = x?.service_content?.length // 服務內容 x        
      
        return { first_Class , first_Class_Id , second_Class_Num }
    
     } ;


     return { all_Services , methods_first ,  onSubmit_first , convert_First_Class  , click_Delete_First_Class }


} ;


// 第二層分類所需資料
export const useEffect_Service_SecodeClass_Data = ( ) => {

    // 目前所點選 _ 第一層分類
    const current_First_Class = useSelector( ( state : RootState ) => state.management_class.current_First_Class ); 
    const first_Class_Id      = current_First_Class?.id ;  // 第一層分類 id
    
    // 查詢 _ 第一層分類內容 ( 根據 first_Class_Id 變化，即時查詢，以因應第二層新增或刪除的即時渲染 )  
    const { data : cFirstClass } = useFetch_Service_By_Id( first_Class_Id ) ;
    const second_Classes = cFirstClass?.service_content ; // 相對應 _ 服務第二層分類


    // RHF 相關方法
    const { methods : methods_second , onSubmit : onSubmit_second } = useForm_Provider_Create_Service_Content( first_Class_Id , second_Classes ) ;


    // 點選 _ 刪除 : 第二層分類 
    const click_Delete_Second_Class = useDelete_Service_Content() ;



    // 轉換欄位 : 第二層分類        
    const convert_Second_Class = ( x : any ) => x?.content ;


    return { second_Classes , methods_second , onSubmit_second , click_Delete_Second_Class , convert_Second_Class }
   

} ;








