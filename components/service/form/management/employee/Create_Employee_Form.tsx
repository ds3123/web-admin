

import { FC } from 'react' ;
import { FormContainer , Section_Title } from '@layout/index' ;
import { Employee_Form } from '@service/index' ;
import { FaUserTie } from "react-icons/fa" ;
import { useForm_OnSubmit_Create_Empolyee  } from "@hooks/form/onsubmit/useForm_OnSubmit_Employee"



// 員工表單 _ 新增滋藥
const Create_Employee_Form : FC = () => {

     
     // 提交處理
     const onSubmit = useForm_OnSubmit_Create_Empolyee() ;

     // 標題
     const title    = "員工資料" ;

     

     return <div data-testid = "Create_Employee_Form"  >

               <FormContainer title = '新增資料'>

                  <Section_Title title = { title } icon = { <FaUserTie size = { 20 }/> } > </Section_Title>
                 
                  <Employee_Form title = { title } onSubmit = { onSubmit } />

               </FormContainer>

            </div>

} ;

export default Create_Employee_Form 
