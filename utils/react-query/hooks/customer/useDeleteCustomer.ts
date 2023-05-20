
import { useMutation , useQueryClient } from "react-query" ;
import { delete_Customer_By_Id } from "@api/api_Customer" ;
import { Toast } from '@layout/index';
import { useDispatch } from "react-redux";
import { close_Right_Panel } from '@reducer/reducer_Layout'



//  @ 刪除 _ 客戶
export const useDelete_Customer = () => {


    const dispatch    = useDispatch() ;
    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 
                                    ( id : string ) => delete_Customer_By_Id( id ) ,
                                    { 
                                        onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 刪除成功
                                                            Toast( "已刪除 : 客戶" ) ;
                                                        
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
