


import { useMutation , useQueryClient } from "react-query" ;
import { create_Account } from "@api/api_Account" ;
import { Toast } from '@layout/index' ;
import { useDispatch } from "react-redux" ;
import { close_Right_Panel } from '@reducer/reducer_Layout'



// @ 新增 _ 帳戶
export const useCreate_Account = () => {

    const dispatch    = useDispatch() ;
    const queryClient = useQueryClient() ;

    const { mutate }  = useMutation( 
                                     ( obj : any ) => create_Account( obj ) ,
                                     { 
                                       onSuccess : () => {

                                                            // 刪除快取
                                                            queryClient.invalidateQueries() ; 

                                                            // 新增成功
                                                            Toast( "已新增 : 帳戶" ) ;
                                                        
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


