

import { FC } from 'react' ;
import { FormWrapper } from '@layout/index' ;
import { useForm_Provider_Update_Service_Order } from '@/hooks/form/userForm_Provider';
import { db_Service_Order_Columns } from '@/utils/custom_types/form';
import { Delete_Button } from '@/components/layout';
import { useDelete_Service_Order } from "@rq_hooks/service/useDeleteService" ;
import { FormProvider } from "react-hook-form" ;
import { Service_Info_Form } from "@service/index" ;



type Update = {

   service : db_Service_Order_Columns ; // 客戶資料

}



// 表單 _ 更新服務訂單
const Update_Service_Order_Form : FC< Update > = ( { service } ) => {

     
     const { methods , onSubmit } = useForm_Provider_Update_Service_Order( service ) ;
     const { handleSubmit , formState } = methods ;


     // 刪除函式
     const delete_Service_Order = useDelete_Service_Order() ;


     return <form onSubmit = { handleSubmit( onSubmit ) } >

                { /* 刪除客戶按鈕 */ }
                <Delete_Button delete_Func = { delete_Service_Order } data_Id = { service?.id } />
                
                <FormWrapper title = '修改資料' isValid = { formState.isValid } >

                    <FormProvider { ...methods } >

                        <Service_Info_Form type = "is_Update" /> 

                    </FormProvider>

                </FormWrapper>

            </form>  


} ;


export default Update_Service_Order_Form
       