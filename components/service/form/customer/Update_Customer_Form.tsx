

import { FC } from 'react' ;
import { FormWrapper } from '@layout/index' ;
import { useForm_Provider_Update_Customer } from '@/hooks/form/userForm_Provider';
import { Input , DateInput , Select } from '@layout/index' ;
import { db_Customers_Columns } from '@/utils/custom_types/form';
import { Delete_Button } from '@/components/layout';
import { useDelete_Customer } from "@rq_hooks/customer/useDeleteCustomer" ;

import { FormProvider } from "react-hook-form" ;
import { Customer_Form } from "@service/index" ;



type Update = {

   customer : db_Customers_Columns ; // 客戶資料

}



// 表單 _ 更新客戶
const Update_Customer_Form : FC< Update > = ( { customer } ) => {

     
     const { methods , onSubmit } = useForm_Provider_Update_Customer( customer ) ;
     const { handleSubmit , formState } = methods ;


     // 刪除客戶函式
     const delete_Customer = useDelete_Customer();


     return <form onSubmit = { handleSubmit( onSubmit ) } >

                { /* 刪除客戶按鈕 */ }
                <Delete_Button delete_Func = { delete_Customer } data_Id = { customer?.id } />
                
                <FormWrapper title = '修改資料' isValid = { formState.isValid } >

                    <FormProvider { ...methods }>

                        <Customer_Form />

                    </FormProvider>

                </FormWrapper>

            </form>  


} ;


export default Update_Customer_Form
       