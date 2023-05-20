



import { useMutation , useQueryClient } from "react-query" ;
import { delete_Plan_By_Id , delete_Plan_Content_By_Id  } from "@api/api_Plan" ;
import { Toast } from '@layout/index';
import { useDispatch } from "react-redux";
import { close_Right_Panel } from '@reducer/reducer_Layout'




//  @ 刪除 _ 自訂方案
export const useDelete_Plan= () => {

  
  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Plan_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                           // 刪除快取
                                                           queryClient.invalidateQueries() ; 

                                                           // 刪除成功
                                                           Toast( "已刪除 : 自訂方案" ) ;


                                                        } ,
                                      onError: ( error : any ) => {
                                                          
                                                                     Toast(`刪除失敗: ${ error.message }`) ;

                                                                  }
                                  }
                                ) ;

  // --------
    
     // 點選 _ 刪除 ( 加上事件 e )
     const click_Delete = ( e : any , id : string ) => {
    
      e.stopPropagation() ;

      if( confirm( "確認要刪除此分類 ?" ) ) mutate( id ) ;
  
  } ;

  return click_Delete ;

} ;



//  @ 刪除 _ 自訂方案 : 內容
export const useDelete_Plan_Content = () => {

  
  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Plan_Content_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                           // 刪除快取
                                                           queryClient.invalidateQueries() ; 

                                                           // 刪除成功
                                                           Toast( "已刪除 : 自訂方案內容" ) ;


                                                        } ,
                                      onError: ( error : any ) => {
                                                          
                                                                     Toast(`刪除失敗: ${ error.message }`) ;

                                                                  }
                                  }
                                ) ;

  // --------
    
     // 點選 _ 刪除 ( 加上事件 e )
     const click_Delete = ( e : any , id : string ) => {
    
      e.stopPropagation() ;

      if( confirm( "確認要刪除此分類 ?" ) ) mutate( id ) ;
  
  } ;

  return click_Delete ;

} ;



