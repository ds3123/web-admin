import * as yup from "yup"






// @ [ 管理區 ] =============


// # 分類設定 > 方案 -------


// 方案 : 第 1 層級 
export const schema_Management_Plan_First_Class = yup.object().shape({

    management_plan_name   : yup.string().required( "須填寫 : 方案名稱" )  ,
    management_plan_count  : yup.string().required( "須填寫 : 方案可使用次數" )  ,
    management_plan_period : yup.string().required( "須填寫 : 方案可使用期限" ) 
    

 });
 
 
 // 方案 : 第 2 層級 
 export const schema_Management_Plan_Second_Class = yup.object().shape({

    management_plan_content_name  : yup.string().required( "須填寫 : 方案內容名稱" )  ,

 });



// # 價格設定 > 方案 -------


// 方案 : 第 1 層級 
export const schema_Management_Plan_Price_First_Class = yup.object().shape({

   management_plan_price_first_class : yup.string().required( "須填寫 : 方案價格" )  ,

});


// 方案 : 第 2 層級 
export const schema_Management_Plan_Price_Second_Class = yup.object().shape({

   management_plan_price_second_class : yup.string().required( "須填寫 : 方案內容價格" )  ,

});
