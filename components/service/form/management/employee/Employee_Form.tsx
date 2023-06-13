import { FC } from 'react' ;
import { Input , Select , DateInput } from "@layout/index"
import { Submit_Button } from "@layout/index" ;
import { useForm_Edit } from '@/hooks/form/useForm_Edit';
import { useForm_Employee_Form } from '@/utils/custom_types/form';
import { schema_Employee } from "@/utils/schemas/edit_schema" ;


type Employee_Form = {

    title           : string ;
    onSubmit        : ( data : any ) => void ;
    default_Values? : useForm_Employee_Form ;

}


const Employee_Form : FC< Employee_Form> = ( { title , onSubmit , default_Values } ) => {

    
  const { handleSubmit , control , formState }  = useForm_Edit< useForm_Employee_Form >( schema_Employee , default_Values ) ;


  return <div data-testid = "Employee_Form">

            <form aria-label = "form" onSubmit = { handleSubmit( ( data ) => onSubmit( data ) ) } className = "grid grid-cols-4 gap-5 relative mt-10" >  

                { /* 各個欄位  */ }
                <Input type = "text" control = { control } label = '姓名' name = 'employee_name' required = { true } /> 

                <Input type = "text" control = { control } label = '暱稱' name = 'employee_nickname' required = { false } /> 

                <Input type = "text" control = { control } label = '帳號' name = 'employee_account' required = { true } />  

                <Input type = "text" control = { control } label = '密碼' name = 'employee_password' required = { true } /> 

                <Input type = "text" control = { control } label = '身分證字號' name = 'employee_id' required = { true } />  

                <Input type = "text" control = { control } label = '手機號碼' name = 'employee_mobile' required = { true } />  
                
                <Input type = "text" control = { control } label = '家用號碼' name = 'employee_telphone' required = { false } />  
                
                <DateInput control = { control } label = "生日" name = "employee_birthday"  required = { false }  />

                <Input type = "text" control = { control } label = 'Email' name = 'employee_email' required = { false } />  
                
                <Input type = "text" control = { control } label = 'Line' name = 'employee_line' required = { false } />  
                
                <div className = "md:col-span-2" >
                   <Input type = "text" control = { control } label = '通訊地址' name = 'employee_address' required = { false } />  
                </div>
                
                <Select control = { control } label = '性別'    name = 'employee_sex'             select_options = { [ '請選擇' , '男' , '女' ] }   default_value = '請選擇' required = { true } />
                
                <Select control = { control } label = '計薪類別' name = 'employee_salary_type'     select_options = { [ "正職" , "計時" ] }         default_value = '正職'   required = { false } />
                
                <Select control = { control } label = '職位類別' name = 'employee_position_type'   select_options = { [ "櫃檯" , "美容" , "接送" ] } default_value = '櫃檯'   required = { false } />
                
                <Select control = { control } label = '職位現況' name = 'employee_position_status' select_options = { [ "在職" , "離職" ] }         default_value = '櫃檯'   required = { false } /> 

                { /* 提交鈕 */ }
                <div data-testid = "Submit_Section" className = "md:col-span-4 mt-32 mb-32" >
                    <Submit_Button btn_name = { `提交 _ ${ title }` } is_valid = { formState.isValid } />
                </div> 

            </form >

         </div>

} ;

export default Employee_Form
       