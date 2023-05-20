


import { useMutation , useQueryClient } from "react-query" ;
import { Toast } from '@layout/index' ;
import { create_Pet , create_Pet_Class ,  create_Pet_Species } from '@api/api_Pet' ;
import { useDispatch } from "react-redux" ;
import { close_Right_Panel } from '@reducer/reducer_Layout' ;




// @ 新增 _ 寵物
export const useCreate_Pet = () => {

  const dispatch    = useDispatch() ;
  const queryClient = useQueryClient() ;

  const { mutate }  = useMutation( 
                                   ( obj : any ) => create_Pet( obj ) ,
                                   { 
                                     onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 

                                                          // 新增成功
                                                          Toast( "已新增 : 寵物" ) ;
                                                      
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


// @ 新增 _ 寵物 ( 回傳新增寵物後的 id )
export const useCreate_Pet_With_Id = () => { 

  // # 可使用 mutateAsync 以取得 onSuccess 後的回傳資料 
  const { mutateAsync }  = useMutation( 

                                        ( obj : any ) => create_Pet( obj ) ,  // 先新增寵物

                                                          { 
                                                            onSuccess : ( ) => {
                                                                                  Toast( "已新增 : 寵物" ) ; 
                                                                                } ,

                                                            onError: ( error : any ) => {
                                                                                          Toast(`新增失敗: ${ error.message }`) ;
                                                                                        }
                                                          }

                                                        ) ;


   // 執行 with_mutateAsync 後，取得 onSuccess 後資料                                
   const with_mutateAsync = async( data : any ) => {

        // 所新增寵物資料
        const created_Pet    = await mutateAsync( data ) ;
        
        // 所新增寵物於資料表 pets 的 id
        const created_Pet_Id = created_Pet?.data?.id ;
        
        return created_Pet_Id
         
   } ;

   return with_mutateAsync




}


// @ 新增 _ 寵物：種類 ( 管理區 )
export const useCreate_Pet_Class = () => {

    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Pet_Class( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 新增成功
                                                            Toast( "已新增 : 寵物種類" ) ;

                                                         } ,
                                        onError: ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;


// @ 新增 _ 寵物：品種 ( 管理區 )
export const useCreate_Pet_Species = ( ) => {

    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Pet_Species( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 
                                                           
                                                            // 新增成功
                                                            Toast( "已新增 : 寵物品種" ) ;

                                                         } ,
                                        onError: ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;


