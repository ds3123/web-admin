
import { FC } from 'react' ;
import { FormWrapper , Section_Title } from '@layout/index' ;
import { useForm_Provider_Create_Customer } from '@/hooks/form/userForm_Provider' ;
import { Customer_Field_QueryResult } from '@service/index' ;
import { FaUser   } from "react-icons/fa" ;
import { FormProvider } from "react-hook-form" ;
import { Customer_Form } from "@service/index" ;



// 表單 _ 新增客戶
const Create_Customer_Form : FC = () => {


     const { methods , onSubmit } = useForm_Provider_Create_Customer() ;
     const { handleSubmit , formState , watch , setValue } = methods ;

     
     return <form onSubmit = { handleSubmit( onSubmit ) } >

                <FormWrapper title = '新增資料' isValid = { formState.isValid } >

                    <FormProvider { ...methods }>

                        <Section_Title icon = { <FaUser size = { 22 } /> }  title = '客戶資料'  >
                            <Customer_Field_QueryResult  />
                        </Section_Title>

                        <Customer_Form />

                    </FormProvider>
                
                </FormWrapper>

            </form>  

} ;


export default Create_Customer_Form
        