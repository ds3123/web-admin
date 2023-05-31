import { FC } from 'react' ;
import { FormWrapper , Section_Title , Form_Bar  } from '@layout/index' ;
import { useForm_Provider_Create_Service_Order } from '@/hooks/form/userForm_Provider' ;
import { FaUser  } from "react-icons/fa" ;
import { HiDocumentText } from "react-icons/hi" ;
import { MdPets } from "react-icons/md" ;
import { FormProvider } from "react-hook-form" ;
import { Customer_Form , Pet_Form , Service_Info_Form , Customer_Field_QueryResult , Pet_Field_QueryResult } from '@service/index' ;
import { useEffect_Service_Section } from "@service/type/service/hooks/useEffect_Service_Section" ;


// 表單 _ 新增寵物
const Create_Service_Order_Form : FC = () => {


     const { methods , onSubmit } = useForm_Provider_Create_Service_Order() ;
     const { handleSubmit , formState , watch } = methods ;


     // 是否顯示 _ 區塊 : 寵物 / 服務
     const { is_Show_Pet , is_Show_Srvice } = useEffect_Service_Section( watch ) ;


     return <form onSubmit = { handleSubmit( onSubmit ) } >

                <FormWrapper title = '新增資料' isValid = { formState.isValid } >

                    <FormProvider { ...methods } > 

                        { /*  客人欄位  */ }
                        <Section_Title icon = { <FaUser size = { 22 } /> }  title = '客戶資料'  >
                            <Customer_Field_QueryResult  />
                        </Section_Title>
                        
                        <Customer_Form /> 

                        <div className = "col-span-4" > <hr className = "mt-10 mb-10"/> </div>

                        { /* 寵物欄位  */ }
                        <Section_Title icon = { <MdPets size = { 25 } /> } title = '寵物資料' > 
                            <Pet_Field_QueryResult />
                        </Section_Title>
                      
                        { is_Show_Pet ? <Pet_Form /> : <Form_Bar text = "尚未填寫完整 _ 客戶欄位資料" /> }                            

                        <div className = "col-span-4" > <hr className = "mt-10 mb-10"/> </div>

                        { /* 服務單欄位  */ }
                        <Section_Title icon = { <HiDocumentText size = { 35 } /> }  title = '服務資料' > </Section_Title>

                        { is_Show_Srvice ? <Service_Info_Form type = 'is_Create' /> : <Form_Bar text = "尚未填寫完整 _ 寵物欄位資料" /> }

                    </FormProvider>

                </FormWrapper>
                
            </form>  

} ;


export default Create_Service_Order_Form
        