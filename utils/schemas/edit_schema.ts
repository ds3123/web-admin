


import * as yup from "yup" ;



// 員工 
export const schema_Employee = yup.object().shape({

   employee_account  : yup.string().required( "須填寫 : 帳號" ) ,
   employee_password : yup.string().required( "須填寫 : 密碼" ) ,
   employee_name     : yup.string().required( "須填寫 : 姓名" ) ,
   employee_id       : yup.string().required( "須填寫 : 身分證字號" ) ,
   employee_mobile   : yup.string().required( "須填寫 : 手機號碼" ) ,

   employee_sex      : yup.string().required('請選擇性別').notOneOf(['請選擇'], '請選擇 : 性別選項'),
   
    
}) ;
 