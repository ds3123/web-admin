


import { useMutation , useQueryClient } from "react-query" ;
import { Toast } from '@layout/index' ;
import { create_Service , create_Service_Content , create_Service_Price , create_Service_Order } from '@api/api_Service' ;
import { useDispatch } from "react-redux" ;
import { close_Right_Panel } from '@reducer/reducer_Layout' ;




// @ 新增 _ 服務：訂單
export const useCreate_Service_Order = () => {


  const dispatch    = useDispatch() ;
  const queryClient = useQueryClient() ;

  const { mutate }  = useMutation( 
                                   ( obj : any ) => create_Service_Order( obj ) ,
                                   { 
                                     onSuccess : () => {

                                                           // 刪除快取
                                                           queryClient.invalidateQueries() ; 

                                                           // 新增成功
                                                           Toast( "已新增 : 服務訂單" ) ;

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




// @ 新增 _ 服務：項目 ( 管理區 )
export const useCreate_Service = () => {

    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Service( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 新增成功
                                                            Toast( "已新增 : 服務種類" ) ;

                                                         } ,
                                        onError: ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;



// @ 新增 _ 服務 : 項目內容 ( 管理區 )
export const useCreate_Service_Content = () => {

    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Service_Content( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 
                                                           
                                                            // 新增成功
                                                            Toast( "已新增 : 服務項目內容" ) ;

                                                         } ,
                                        onError : ( error : any ) => {
                                                            
                                                                      Toast(`新增失敗: ${ error.message }`) ;

                                                                     }
                                     }
                                   ) ;

    return mutate ;

} ;



// @ 新增 _ 服務 : 價格 ( 管理區 _ 價格設定 )
export const useCreate_Service_Price = () => {

  const queryClient = useQueryClient() ;


  const { mutate }  = useMutation( 
                                   ( obj : any ) => create_Service_Price( obj ) ,
                                   { 
                                     onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 
                                                         
                                                          // 新增成功
                                                          Toast( "已新增 : 服務項目價格" ) ;

                                                       } ,
                                      onError : ( error : any ) => {
                                                          
                                                                    Toast(`新增失敗: ${ error.message }`) ;

                                                                   }
                                   }
                                 ) ;

  return mutate ;

} ;
