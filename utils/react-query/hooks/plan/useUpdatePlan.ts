
import { useMutation , useQueryClient } from "react-query" ;
import { update_Service_Price_By_Id , update_Service_Order_By_Id } from '@api/api_Service'
import { Toast } from '@layout/index' ;
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { close_Right_Panel } from '@reducer/reducer_Layout' ;




// 更新 _ 方案 : 價格
export const useUpdate_Plan_Price = () => {


    const queryClient = useQueryClient() ;


    const { mutate } = useMutation( 

                                    ( obj ) => update_Service_Price_By_Id( obj ) ,
                                    { 

                                        onSuccess : () => {

                                                              // 刪除快取
                                                              queryClient.invalidateQueries() ;

                                                              // 更新成功通知
                                                              Toast( "已更新此價格" ) ;
                                         
                                                             
                                                           } ,

                                        onError : ( error : any ) => {

                                                                       Toast(`修改失敗: ${ error.message }`) ;

                                                                     }

                                    }

                                  ) ;

    return mutate ;

} ;
