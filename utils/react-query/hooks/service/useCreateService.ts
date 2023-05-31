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
                                       onSuccess : ( ) => {

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

// @ 新增 _ 服務 : 項目 -> 回傳新增服務後的 id ( 管理區  )
export const useCreate_Service_With_Id = () => {

   // # 可使用 mutateAsync 以取得 onSuccess 後的回傳資料 
   const { mutateAsync }  = useMutation(  

                                         ( obj : any ) => create_Service( obj ) ,  // 先新增客戶

                                         { 
                                           onSuccess : ( ) => {
                                                                Toast( "已新增 : 服務" ) ; 
                                                              } ,

                                           onError: ( error : any ) => {
                                                                        Toast(`新增失敗: ${ error.message }`) ;
                                                                      }
                                         }

                                       );

   // 執行 with_mutateAsync 後，取得 onSuccess 後資料                                
   const with_mutateAsync = async( data : any ) => {

      // 所新增服務資料
      const created_Service    = await mutateAsync( data ) ;
      
      // 所新增客戶於資料表 customers 的 id
      const created_Service_Id = created_Service?.data?.id ;
      
      return created_Service_Id
     
   } ;

   return with_mutateAsync


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


// @ 新增 _ 服務 : 項目內容 -> 回傳新增服務內容後的 id ( 管理區  )
export const useCreate_Service_Content_With_Id = () => {

    // # 可使用 mutateAsync 以取得 onSuccess 後的回傳資料 
    const { mutateAsync }  = useMutation(  

                                          ( obj : any ) => create_Service_Content( obj ) ,  // 先新增服務項目內容

                                          { 
                                            onSuccess : ( ) => {
                                                                 Toast( "已新增 : 服務項目內容" ) ; 
                                                               } ,

                                            onError: ( error : any ) => {
                                                                          Toast(`新增失敗: ${ error.message }`) ;
                                                                        }
                                          }

                                        );

    // 執行 with_mutateAsync 後，取得 onSuccess 後資料                                
    const with_mutateAsync = async( data : any ) => {

        // 所新增服務內容資料
        const created_Service_Content = await mutateAsync( data ) ;

        // 所新增服務內容於資料表 service_contents 的 id
        const created_Service_Content_Id = created_Service_Content?.data?.id ;

        return created_Service_Content_Id

    } ;

    return with_mutateAsync


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
