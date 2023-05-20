import { useQuery } from "react-query" ;
import { fetch_Account_All_Pet_Classes , fetch_Pet_Class_By_Id } from "@api/api_Pet"
import { petKeys  } from "@rq_keys/petKeys"









// 取得 _ 特定店家，所有寵物：種類
export const useFetch_Account_All_Pet_Classes = () => {


  // 預設值
  const fallback = [] as any[] ; 

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        petKeys.account_all_pet_classes() ,
                                        () => fetch_Account_All_Pet_Classes()
                                      ) ; 

                                      
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch }  

  
}


// 取得 _ 特定寵物 : 種類
export const useFetch_Pet_Class_By_Id = ( pet_class_id : string ) => {

  // 預設值
  const fallback = { pet_species : [] } ;  

  const { data = fallback , isLoading , isFetching  , isError , error , isPreviousData , refetch } = useQuery( 
                                        petKeys.pet_class_by_id( pet_class_id ) ,
                                        () => fetch_Pet_Class_By_Id( pet_class_id ) , 
                                        { enabled : !!pet_class_id } 
                                      ) ; 
                                    
  return { data , isLoading , isFetching  , isError , error , isPreviousData , refetch  }  

}








