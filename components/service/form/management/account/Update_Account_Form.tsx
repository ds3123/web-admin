
import { FC } from 'react' ;
import { FormWrapper } from '@layout/index' ;
import { useForm_Provider_Update_Account } from '@/hooks/form/userForm_Provider';
import { db_Account_Columns } from '@/utils/custom_types/form';
import { FormProvider } from "react-hook-form" ;
import { Account_Form } from '@service/index' ;




type Update = {

   account : db_Account_Columns ; // 帳戶資料
 
}



// 表單 _ 更新帳戶
const Update_Account_Form : FC< Update > = ( { account } ) => {

      const { methods , onSubmit }       = useForm_Provider_Update_Account( account ) ;
      const { handleSubmit , formState } = methods ;

      return <form onSubmit = { handleSubmit( onSubmit ) } >
                
                <FormWrapper title = '修改資料' isValid = { formState.isValid } >
                    
                    <FormProvider { ...methods }>

                        <Account_Form />

                    </FormProvider>

                </FormWrapper>

            </form>  



} ;

export default Update_Account_Form
       