import * as yup from "yup"



// 新增 _ 寵物
export const schema_CreatePet = yup.object().shape({

   // 主人
   customer_name   : yup.string().required( "須填寫 : 客戶姓名" ),
   customer_mobile : yup.string().required('請輸入手機號碼').matches(/^09\d{8}$/, '請輸入有效的手機號碼'),
   customer_sex    : yup.string().required('請選擇性別').notOneOf(['請選擇'], '請選擇有效的性別選項'),

   // 寵物
   pet_name        : yup.string().required( "須填寫 : 寵物名字" ),
   pet_class       : yup.string().required('請選擇寵物種類').notOneOf(['請選擇'], '請選擇有效的寵物種類選項'),
   pet_species     : yup.string().required('請選擇寵物品種').notOneOf(['請選擇'], '請選擇有效的寵物品種選項'),
   pet_sex         : yup.string().required('請選擇寵物性別').notOneOf(['請選擇'], '請選擇有效的寵物性別選項'),
   pet_serial      : yup.string().required( "須填寫 : 寵物編號" ),


});


// 新增 _ 修改
export const schema_UpdatePet = yup.object().shape({

  
   pet_name        : yup.string().required( "須填寫 : 寵物名字" ),
   pet_class       : yup.string().required('請選擇寵物種類').notOneOf(['請選擇'], '請選擇有效的寵物種類選項'),
   pet_species     : yup.string().required('請選擇寵物品種').notOneOf(['請選擇'], '請選擇有效的寵物品種選項'),
   pet_sex         : yup.string().required('請選擇寵物性別').notOneOf(['請選擇'], '請選擇有效的寵物性別選項'),
   pet_serial      : yup.string().required( "須填寫 : 客戶姓名" ),


});

 
 


// 寵物 : 種類 ( 管理區 )
export const schema_Management_PetClass = yup.object().shape({

   management_pet_class : yup.string().required( "須填寫 : 寵物種類" ) 
   
});



// 寵物 : 品種 ( 管理區 )
export const schema_Management_PetSpeices = yup.object().shape({

   management_pet_species : yup.string().required( "須填寫 : 寵物品種" )
 
});





