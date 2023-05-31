
import { useMutation , useQueryClient } from "react-query" ;
import { create_Customer } from "@api/api_Customer" ;
import { Toast } from '@layout/index' ;
import { useDispatch } from "react-redux" ;
import { close_Right_Panel } from '@reducer/reducer_Layout'



// @ 新增 _ 客戶
export const useCreate_Customer = () => {

    const dispatch    = useDispatch() ;
    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Customer( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 新增成功
                                                            Toast( "已新增 : 客戶" ) ;
                                                        
                                                            // 關掉右側面板
                                                            dispatch( close_Right_Panel() as any ) ; 

                                                        } ,
                                        onError: ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;


// @ 新增 _ 客戶 -> 回傳新增客戶後的 id 
export const useCreate_Customer_With_Id = () => {


  // # 可使用 mutateAsync 以取得 onSuccess 後的回傳資料 
  const { mutateAsync }  = useMutation( 

                                        ( obj : any ) => create_Customer( obj ) ,  // 先新增客戶

                                        { 
                                          onSuccess : ( ) => {
                                                                Toast( "已新增 : 客戶" ) ; 
                                                              } ,

                                          onError: ( error : any ) => {
                                                                        Toast(`新增失敗: ${ error.message }`) ;
                                                                      }
                                        }

                                      ) ;
      
      // 執行 with_mutateAsync 後，取得 onSuccess 後資料                                
      const with_mutateAsync = async( data : any ) => {

           // 所新增客戶資料
           const created_Customer    = await mutateAsync( data ) ;
           
           // 所新增客戶於資料表 customers 的 id
           const created_Customer_Id = created_Customer?.data?.id ;
           
           return created_Customer_Id
            
      } ;

      return with_mutateAsync

} ;