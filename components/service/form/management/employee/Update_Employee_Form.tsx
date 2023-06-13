
import { db_Employee_Columns, useForm_Employee_Form } from '@/utils/custom_types/form';
import { FC  } from 'react' ;
import { FormContainer , Section_Title } from '@layout/index' ;
import { FaUserTie } from "react-icons/fa" ;
import { Employee_Form } from '@service/index' ;
import moment from 'moment' ; 
import { useForm_OnSubmit_Update_Empolyee  } from "@hooks/form/onsubmit/useForm_OnSubmit_Employee"





type Update = {

    employee : db_Employee_Columns ; // 員工資料
 
 }


// 員工表單 _ 更新資料
const Update_Employee_Form : FC< Update > = ( { employee } ) => {


     // 提交處理
     const onSubmit = useForm_OnSubmit_Update_Empolyee( employee ) ;

     // 標題
     const title    = "員工資料" ;


      // 員工表單 _ 預設值 
      const default_Employee_Values : useForm_Employee_Form =  {

                employee_account  : employee.account ,
                employee_password : employee.password ,

                employee_name     : employee.name , 
                employee_nickname : employee.nickname ,

                employee_sex      : employee.sex ,
                employee_id       : employee.serial_id ,  // 身分證字號  

                employee_mobile   : employee.mobile_phone , 
                employee_telphone : employee.tel_phone , 

                employee_birthday : new Date(  employee.birthday ) as any , 
                employee_email    : employee.email ,
                employee_line     : employee.line ,
                employee_address  : employee.address ,

                employee_salary_type     : employee.salary_type ,
                employee_position_type   : employee.position_type ,
                employee_position_status : employee.position_status
      

      } ;



    return <div data-testid = "Update_Employee_Form">

               <FormContainer title = '更新資料'>

                    <Section_Title title = { title } icon = { <FaUserTie size = { 20 }/> } > </Section_Title>

                    <Employee_Form title = { title } onSubmit = { onSubmit } default_Values = { default_Employee_Values } />

                </FormContainer>

           </div>

} ;


export default Update_Employee_Form
       