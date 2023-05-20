
import { useMutation , useQueryClient } from "react-query" ;
import { delete_Service_By_Id , delete_Service_Content_By_Id , delete_Service_Order_By_Id} from "@api/api_Service" ;
import { Toast } from '@layout/index';
import { useDispatch } from "react-redux";
import { close_Right_Panel } from '@reducer/reducer_Layout'




//  @ 刪除 _ 服務 : 訂單
export const useDelete_Service_Order = () => {

  
  const queryClient = useQueryClient() ;
  const dispatch    = useDispatch();


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Service_Order_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                           // 刪除快取
                                                           queryClient.invalidateQueries() ; 

                                                           // 刪除成功
                                                           Toast( "已刪除 : 服務訂單" ) ;

                                                           // 關掉右側面板
                                                           dispatch( close_Right_Panel() as any ) ; 

                                                        } ,
                                      onError: ( error : any ) => {
                                                          
                                                                     Toast(`刪除失敗: ${ error.message }`) ;

                                                                  }
                                  }
                                ) ;

  return mutate

} ;






//  @ 刪除 _ 服務 : 項目 ( 第一層分類  )
export const useDelete_Service = () => {

  
    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 
                                    ( id : string ) => delete_Service_By_Id( id ) ,
                                    { 
                                        onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 刪除成功
                                                            Toast( "已刪除 : 服務項目 ( 第一層分類 )" ) ;

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



//  @ 刪除 _ 服務 : 內容 ( 第二層分類  )
export const useDelete_Service_Content = () => {


  const queryClient = useQueryClient() ;


  const { mutate } = useMutation( 
                                  ( id : string ) => delete_Service_Content_By_Id( id ) ,
                                  { 
                                      onSuccess : () => {

                                                          // 刪除快取
                                                          queryClient.invalidateQueries() ; 

                                                          // 刪除成功
                                                          Toast( "已刪除 : 服務項目 ( 第二層分類 )" ) ;

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
