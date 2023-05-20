

import { useMutation , useQueryClient } from "react-query" ;
import { Toast } from '@layout/index' ;
import { create_Plan , create_Plan_Content , create_Plan_Price  } from '@api/api_Plan' ;
import { useDispatch } from "react-redux" ;
import { close_Right_Panel } from '@reducer/reducer_Layout' ;



// @ 新增 _ 自訂方案 ( 管理區 > 分類設定 > 方案 )
export const useCreate_Plan = () => {

    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Plan( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 新增成功
                                                            Toast( "已新增 : 自訂方案" ) ;

                                                         } ,
                                        onError: ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;



// @ 新增 _ 自訂方案 : 內容 ( 管理區 > 分類設定 > 方案  )
export const useCreate_Plan_Content = () => {

  const queryClient = useQueryClient() ;

  const { mutate }  = useMutation( 
                                   ( obj : any ) => create_Plan_Content( obj ) ,
                                   { 
                                     onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 

                                                          // 新增成功
                                                          Toast( "已新增 : 自訂方案內容" ) ;

                                                       } ,
                                      onError: ( error : any ) => {
                                                          
                                                                    Toast(`新增失敗: ${ error.message }`) ;

                                                                   }
                                   }
                                 ) ;

  return mutate ;

} ;



// @ 新增 _ 自訂方案 : 價格 ( 管理區 > 價格設定 > 方案  )
export const useCreate_Plan_Price = () => { 


  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                   ( obj : any ) => create_Plan_Price( obj ) ,
                                   { 
                                     onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 
                                                         
                                                          // 新增成功
                                                          Toast( "已新增 : 自訂方案價格" ) ;

                                                       } ,
                                      onError : ( error : any ) => {
                                                          
                                                                    Toast(`新增失敗: ${ error.message }`) ;

                                                                   }
                                   }
                                 ) ;

  return mutate ;



}