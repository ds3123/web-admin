
import * as yup from "yup"




// 新增 _ 服務 : 訂單
export const schema_CreateServiceOrder = yup.object().shape({

   // 主人
   customer_name   : yup.string().required( '須填寫 : 客戶姓名') ,
   customer_mobile : yup.string().required( '請輸入手機號碼').matches(/^09\d{8}$/, '請輸入有效的手機號碼' ) ,
   customer_sex    : yup.string().required( '請選擇性別').notOneOf(['請選擇'] , '請選擇有效的性別選項' ) ,

   // 寵物
   pet_name        : yup.string().required( '須填寫 : 寵物名字' ) ,
   pet_class       : yup.string().required( '請選擇寵物種類').notOneOf(['請選擇'], '請選擇有效的寵物種類選項') ,
   pet_species     : yup.string().required( '請選擇寵物品種').notOneOf(['請選擇'], '請選擇有效的寵物品種選項') ,
   pet_sex         : yup.string().required( '請選擇寵物性別').notOneOf(['請選擇'], '請選擇有效的寵物性別選項') ,
   pet_serial      : yup.string().required( '須填寫 : 寵物編號' ) ,

   // 服務
   service_type    : yup.string().required( '請選擇服務類型').notOneOf(['請選擇'], '請選擇有效的服務類型選項') ,
   // service_price   : yup.string().required( '須填寫 : 服務價格' ) ,
   // amount_paid     : yup.string().required( '須填寫 : 實付金額' )

   
}) ;



// 更新 _ 服務 : 訂單
export const schema_UpdateServiceOrder = yup.object().shape({

   

   // 服務
   service_type    : yup.string().required( '請選擇服務類型').notOneOf(['請選擇'], '請選擇有效的服務類型選項') ,
  
   
}) ;





// @ [ 管理區 ] =============


// # 分類設定 > 服務 -------


// 服務 : 第 1 層級 
export const schema_Management_Service_First_Class = yup.object().shape({

    management_service_first_class : yup.string().required( "須填寫 : 服務第一層分類" ) 
    
 });
 
 
 // 服務 : 第 2 層級 
 export const schema_Management_Service_Second_Class = yup.object().shape({
 
    management_service_second_class : yup.string().required( "須填寫 : 服務第二層分類" ) 
    
 });



// # 價格設定 > 服務 -------

 // 服務價格 : 第 1 層級 
 export const schema_Management_Service_Price_First_Class = yup.object().shape({
 
     management_service_price_first_class : yup.string().required( "須填寫 : 第一層服務價格" ) 
   
});

// 服務價格 : 第 2 層級 
export const schema_Management_Service_Price_Second_Class = yup.object().shape({
 
   management_service_price_second_class : yup.string().required( "須填寫 : 第案層服務價格" ) 
 
});