import * as yup from "yup"



// 新增 _ 客人
export const schema_CreateCustomer = yup.object().shape({

   customer_name   : yup.string().required( "須填寫 : 姓名" ),
   customer_mobile : yup.string().required('請輸入手機號碼').matches(/^09\d{8}$/, '請輸入有效的手機號碼'),
   customer_sex    : yup.string().required('請選擇性別').notOneOf(['請選擇'], '請選擇有效的性別選項'),

});


// 更新 _ 客人
export const schema_UpdateCustomer = yup.object().shape({

   customer_name   : yup.string().required( "須填寫 : 姓名" ),
  
   customer_mobile : yup.string().required('請輸入手機號碼').matches(/^09\d{8}$/, '請輸入有效的手機號碼'),
   customer_sex    : yup.string().required('請選擇性別').notOneOf(['請選擇'], '請選擇有效的性別選項'),

});



