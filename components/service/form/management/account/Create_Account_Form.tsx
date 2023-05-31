

import { FC , useState , useEffect } from 'react' ;
import { FormWrapper , Section_Title } from '@layout/index' ;
import { Account_Form } from '@service/index' ;

import { useForm_Provider_Create_Account } from '@/hooks/form/userForm_Provider' ;
import { FormProvider } from "react-hook-form" ;
import { BsShop } from "react-icons/bs" ;


// # 表單 _ 新增帳號
const Create_Account_Form : FC = () => {

    const { methods , onSubmit } = useForm_Provider_Create_Account() ;
    const { handleSubmit , formState , watch , setValue } = methods ;


    return <form onSubmit = { handleSubmit( onSubmit ) } >

              <FormWrapper title = '新增資料' isValid = { formState.isValid } >

                  <FormProvider { ...methods }>

                     <Section_Title icon = { <BsShop size = { 22 } /> } title = '帳號資料' > </Section_Title>

                     <Account_Form />

                  </FormProvider>

              </FormWrapper>

           </form>

} ;

export default Create_Account_Form
       