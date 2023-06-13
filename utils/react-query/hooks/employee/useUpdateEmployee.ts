



import { useMutation , useQueryClient } from "react-query" ;
import { useDispatch } from "react-redux" ;
import { update_Employee_By_Id  } from '@api/api_Employees'
import { Toast } from '@layout/index' ;
import { close_Right_Panel } from '@reducer/reducer_Layout' ;



// 更新 _ 員工
export const useUpdate_Employee = () => {


    const dispatch    = useDispatch() ;
    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 

                                    ( obj ) => update_Employee_By_Id( obj ) ,
                                    { 

                                        onSuccess : () => {

                                                              // 刪除快取
                                                              queryClient.invalidateQueries() ;

                                                              // 更新成功通知
                                                              Toast( "已更新此員工資料" ) ;
                                         
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