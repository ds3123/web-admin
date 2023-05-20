

import { useMutation , useQueryClient } from "react-query" ;
import { useDispatch } from "react-redux" ;
import { update_Customer_By_Id  } from '@api/api_Customer'
import { Toast } from '@layout/index' ;
import { close_Right_Panel } from '@reducer/reducer_Layout'
import { AppDispatch } from "@/store/store";



// 更新 _ 客戶
export const useUpdate_Customer = () => {


    const dispatch    = useDispatch< AppDispatch >() ;
    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 

                                    ( obj ) => update_Customer_By_Id( obj ) ,
                                    { 

                                        onSuccess : () => {

                                                              // 刪除快取
                                                              queryClient.invalidateQueries() ;

                                                              // 更新成功通知
                                                              Toast( "已更新此客戶" ) ;
                                         
                                                              // 關掉右側面板
                                                              dispatch( close_Right_Panel() as any ) ; 

                                                           } ,

                                        onError : ( error : any ) => {

                                                                       Toast(`修改失敗: ${ error.message }`) ;

                                                                     }

                                    }

                                  ) ;

    return mutate ;

} ;