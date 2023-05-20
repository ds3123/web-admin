
import { useForm_Provider_Create_Pet_Class } from "@hooks/form/userForm_Provider" ;
import { useFetch_Account_All_Pet_Classes } from '@/utils/react-query/hooks/pet/useFetchPets';
import { useFetch_Pet_Class_By_Id } from "@rq_hooks/pet/useFetchPets" ;
import { useForm_Provider_Create_Pet_Species } from "@hooks/form/userForm_Provider" ;
import { useDelete_Pet_Class , useDelete_Pet_Species  } from "@rq_hooks/pet/useDeletePet" ;


/*

   # 分類設定 > 寵物 : 分類資料

*/


// 第一層分類所需資料
export const useEffect_Pet_FirstClass_Data = () => {

     // 取得 _ 店家所有 : 寵物種類
     const { data : all_Pet_Classes } = useFetch_Account_All_Pet_Classes() ;

    
     // RHF 相關方法
     const { methods : methods_class , onSubmit : onSubmit_class } = useForm_Provider_Create_Pet_Class( all_Pet_Classes ) ;
 
     
     // 點選 _ 刪除 : 寵物種類
     const click_Delete_Class = useDelete_Pet_Class() ;


     return { all_Pet_Classes  , methods_class , onSubmit_class ,  click_Delete_Class }


} ;



// 第二層分類所需資料
export const useEffect_Pet_SecodeClass_Data = ( first_Class_Id : string ) => {


    // 目前所點選 _ 寵物種類
    const { data : current_Pet_Class } = useFetch_Pet_Class_By_Id( first_Class_Id ) ;

    // 目前所點選 _ 寵物品種
    const all_Pet_Species = current_Pet_Class?.pet_species ;


    // RHF 相關方法
    const { methods : methods_species , onSubmit : onSubmit_species } = useForm_Provider_Create_Pet_Species( first_Class_Id , all_Pet_Species ) ;
    

    // 點選 _ 刪除 : 寵物品種 
    const click_Delete_Species = useDelete_Pet_Species();


    return { all_Pet_Species , methods_species ,  onSubmit_species , click_Delete_Species }
    

} ;