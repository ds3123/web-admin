

import { useMutation , useQueryClient } from "react-query" ;
import { delete_Pet_By_Id , delete_Pet_Class_By_Id , delete_Pet_Species_By_Id } from "@api/api_Pet" ;
import { Toast } from '@layout/index';
import { useDispatch } from "react-redux";
import { close_Right_Panel } from '@reducer/reducer_Layout'




//  @ 刪除 _ 寵物
export const useDelete_Pet = () => {


  const dispatch    = useDispatch() ;
  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Pet_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 

                                                          // 刪除成功
                                                          Toast( "已刪除 : 寵物" ) ;
                                                      
                                                          // 關掉右側面板
                                                          dispatch( close_Right_Panel() as any ) ; 

                                                      } ,
                                      onError: ( error : any ) => {
                                                          
                                                                     Toast(`刪除失敗: ${ error.message }`) ;

                                                                   }
                                  }
                                ) ;


  return mutate ;

} ;



//  @ 刪除 _ 寵物 : 種類 ( 第一層分類 )
export const useDelete_Pet_Class = () => {

  
    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 
                                    ( id : string ) => delete_Pet_Class_By_Id( id ) ,
                                    { 
                                        onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 刪除成功
                                                            Toast( "已刪除 : 寵物種類" ) ;

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

    return click_Delete

} ;



//  @ 刪除 _ 寵物 : 品種 ( 第二層分類 )
export const useDelete_Pet_Species = () => {


  
  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Pet_Species_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 

                                                          // 刪除成功
                                                          Toast( "已刪除 : 寵物品種" ) ;

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

  return click_Delete

} ;
