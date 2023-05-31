
import { ReactNode } from 'react';
import { Control , Register , Path , RegisterOptions , SubmitHandler , FieldValues , UseFormTrigger } from 'react-hook-form';


/*

  @ 各種表單欄位

*/


// 表單類型 : 新增 / 修改
interface I_Form_Type {

   type : 'is_Create' | 'is_Update' ;  


}



// 自訂 <input /> 表單元素
interface I_Custom_Input<T>{

  type?         : string ;       // 輸入類型  
  control       : Control< T > ; // RHF 物件類型 ( 須指定一個 Control 泛型 )
  label         : string ;       // 標籤名稱
  name          : keyof T ;      // 欄位名稱  
  required      : boolean ;      // 是否必填 

  onChange?     : any ;          // 變動處理 
  value?        : any ;


}


// 自訂 <input /> 表單元素 ( 配合 Date Picker )
interface I_Custom_DateInput<T>{

  type?         : string ;       // 輸入類型  
  control       : Control< T > ; // RHF 物件類型 ( 須指定一個 Control 泛型 )
  label         : string ;       // 標籤名稱
  name          : keyof T ;      // 欄位名稱  
  required      : boolean ;      // 是否必填 
 
}


// 自訂 <input /> 表單元素 ( 配合 Time Picker )
interface I_Custom_TimeInput<T>{

  control          : Control< T >  ;
  
  label            : string ;
  name             : string ;

  default_Time?    : string ;
  handle_OnChange? : any ;    // 自訂 onChange 函式

  required         : boolean ;


}


// 自訂 <select /> 表單元素
interface I_Custom_Select <T> {

  control        : Control< T > ;  // RHF 物件類型 ( 須指定一個 Control 泛型 )
  label          : string ;        // 標籤名稱
  name           : keyof T ;       // 欄位名稱  
  required       : boolean ;       // 是否必填 
  select_options : string[] ;      // 下拉選項
  default_value? : string ;        // 預設值

  onChange?      : any ;           // 變動處理

}


// 自訂 <textarea /> 表單元素
interface I_Custom_TextArea<T>{

  control        : Control< T > ;  // RHF 物件類型 ( 須指定一個 Control 泛型 )
  label          : string ;        // 標籤名稱
  name           : keyof T ;       // 欄位名稱  
  required       : boolean ;       // 是否必填 
  
}



/*
     
    # useFomr< 類型 >() 中，檢驗 _ 各個表單：欄位名稱 ( name ) -> 是否填寫正確 ( 不能檢驗是否缺漏 )

*/


// # 客人 ( RHF 表單 )
interface useForm_Customer_Form {

  customer_name     : string ;  // 姓名
  customer_id?      : any ;     // 身分證字號
  customer_birthday : any ;     // 生日
  customer_mobile   : string ;  // 手機號碼
  customer_telphone : string ;  // 家用電話
  customer_line     : string ;  // Line
  customer_email    : string ;  // Email
  customer_address  : string ;  // 通訊地址
  customer_sex      : string ;  // 性別
  customer_note     : string ;  // 備註

}

// # 客人 ( 資料庫 )
interface db_Customers_Columns {

  id?          : any ;
  account_id   : any ;         

  name         : string ;
  sex          : string ;
  serial_id    : string ;
 
  mobile_phone : string ;
  tel_phone    : string ;
  email        : string ;
  line         : string ;
  birthday     : string ;
  
  address      : string ;
  note         : string ;

  // 關聯
  pet?          : any[ db_Pets_Columns ] ;

  created_at?   : string ;
  
}

// ------------------------------

// # 寵物 ( RHF 表單  )
interface useForm_Pet_Form {

  
  pet_id? : any ;              // 寵物所屬主人於 customers 資料表 id 
  pet_customer_id? : any ;     // 寵物所屬主人於 customers 資料表 id 

  pet_name         : string ;  // 名字
  pet_serial       : string ;  // 編號
  pet_chip         : string ;  // 晶片號碼

  pet_class        : string ;  // 種類 ( Ex. 狗、貓、鳥... )
  pet_species      : string ;  // 品種 ( Ex. 柴犬、吉娃娃 ... )

  pet_sex          : string ;  // 性別
  pet_weight       : string ;  // 體重
  pet_color        : string ;  // 毛色
  pet_birthday     : string ;  // 生日

  pet_note         : string ;  // 寵物備註

}


// # 客人 + 寵物 ( RHF 表單  )
interface useForm_PetForm_With_CustomerForm extends useForm_Pet_Form , useForm_Customer_Form  {

}


// # 寵物 ( 資料庫 )
interface db_Pets_Columns {

  id?         : any ;

  account_id  : any ;  
  customer_id : any ;        

  name        : string ;
  serial      : string ;
  chip        : string ;

  pet_class   : string ;
  pet_species : string ; 
  
  sex         : string ;
  weight      : string ;
  color       : string ;
  birthday    : string ;

  note        : string ; 

  // 關聯
  customer?   : db_Customers_Columns ;


  created_at? : string ;

}

// ------------------------------

// # 服務：訂單 ( RHF 表單  )
interface useForm_Service_Order_Form {

   id?            : any ;
   account_id?    : any ;

   customer_id?   : any ;
   pet_id?        : any ;
   service_id?    : any ;

   service_type   : string ; // 服務類型
   service_date   : string ; // 到店日期
   arrival_time   : string ; // 到店時間
   service_price  : string | number ; // 服務價格
   service_note   : string ; // 服務備註
   
   adjust_amount  : any ;    // 自訂調整價格
   adjust_reason  : string ; // 調整理由
   
   payment_method : string ; // 付款方式
   payment_date   : string ; // 付款日期
   
   amount_paid    : string | number ; // 實付金額

   shop_status    : string ; // 到店狀態

   created_at?    : string ;

}


// # 客人 + 寵物 + 服務：訂單 ( RHF 表單  )
interface useForm_ServiceOrder_With_Customer_Pet_Form extends useForm_Service_Order_Form , useForm_Customer_Form , useForm_Pet_Form  {


}


// # 服務：訂單 ( 資料庫 )
interface db_Service_Order_Columns {

  id?            : any ;

  account_id?    : any ;  
  customer_id?   : any ;
  pet_id?        : any ;
  service_id?    : any ;

  service_type   : string ;
  service_date   : string ;
  arrival_time   : string ;

  service_price  : string | number ; 
  adjust_amount  : string | number ;
  adjust_reason  : string ;
  amount_paid    : string | number ;

  payment_method : string ;
  payment_date   : string ;

  service_note   : string ;

  shop_status    : string ;


  // 關聯
  service?  : any ;
  customer? : db_Customers_Columns ;
  pet?      : db_Pets_Columns ;
  account?  : any ;

  created_at? : string ;

}


// # 自訂方案 ( 第一層級 )
interface useForm_Plan_Form {

   management_plan_name   : string ; // 方案名稱 
   management_plan_count  : string ; // 方案可用次數 
   management_plan_period : string ; // 方案可用期限
   management_plan_note   : string ; // 方案備註 

}


// # 自訂方 ( 資料庫 )
interface db_Plan_Columns {

    id?         : any ;
    account_id? : any ;  

    name        : string ;
    count       : string ;
    period      : string ;
    note        : string ;

}


// # 自訂方案 : 內容 ( 第二層級 )
interface useForm_Plan_Content_Form {

    management_plan_content_name : string ;

}

// ------------------------------



// # 商品
interface useForm_Product_Form {

  product_name     : string ;  
  product_type     : string ;
  unit_price       : number ;
  discounted_price : number ;
  stock_num        : number ;
  
}


// @ [ 管理區 ] =============


// # 系統設定 > 寵物 -------

// * 寵物 _ 種類
interface useForm_Management_Pet_Class {

   management_pet_class : string ;  // 寵物種類
  
}


// * 寵物 _ 品種
interface useForm_Management_Pet_Species {

   management_pet_species : string ;  // 寵物品種
 
}


// # 寵物 _ 種類 ( 資料庫 )
interface db_Pet_Class_Columns {

  id?        : string ;
  account_id : any ;
  pet_class  : string ;
 
}


// # 系統設定 > 服務 -------


// # 服務：項目 ( RHF 表單  )
interface useForm_Service_Form {

  management_service_first_class       : string ;  // 服務 _ 第 1 層分類
  management_service_first_class_price : string ;  // 服務 _ 第 1 層分類 : 價格

}

// # 服務 : 項目 ( 資料庫 )npm uninstall start-server-and-test --save-dev

interface db_Services_Columns {

  id?        : string | number ;
  account_id : any ;
  
  name       : string ;

  type?      : string ;
  note?      : string ;
 
}


// # 服務：項目_內容 ( RHF 表單  )
interface useForm_Service_Content_Form {

  management_service_second_class       : string ;  // 服務 _ 第 2 層分類
  management_service_second_class_price : string ;  // 服務 _ 第 2 層分類 : 價格
  

}

// # 服務 : 項目 ( 資料庫 )
interface db_Service_Contents_Columns {

  id?        : string ;
  service_id : any ;
  
  content    : string ;
 
}


// # 服務 : 價格 _ 項目 /內 容 ( 資料庫 )
interface db_Service_Prices_Columns {

   service_id          : any ;
   service_content_id? : any ;

}




// # 價格設定 > 服務 -------

// # 服務 : 第 1 層級 _ 價格 ( RHF 表單  )
interface useForm_ServicePrice_FristClass_Form { 

  management_service_price_first_class : string ;  // 服務價格

}

// # 服務 : 第 2 層級 _ 價格 ( RHF 表單  )
interface useForm_ServicePrice_SecondClass_Form { 

  management_service_price_second_class : string ;  // 服務價格

}



// # 價格設定 > 方案 -------

// # 方案 : 第 1 層級 _ 價格 ( RHF 表單  )
interface useForm_PlanPrice_FristClass_Form { 

  management_plan_price_first_class : string ;  // 服務價格

}


// # 方案 : 第 2 層級 _ 價格 ( RHF 表單  )
interface useForm_PlanPrice_FristClass_Form { 

  management_plan_price_second_class : string ;  // 服務價格

}




// * 分類 ( 共同 ) 

type First_Return = {

  first_Class      : any ;
  first_Class_Id   : string ;
  second_Class_Num : number ;

}


// 第一層分類
type First_Class = {

  first_Class_Options : ReactNode ; // 類別選項
  frist_Class_Input   : ReactNode ; // 輸入框

  methods_First       : any ;
  onSubmit_First      : any ; 

}


// 第二層分類
type Second_Class = {
 
  second_Class_Options : ReactNode ; // 類別選項
  second_Class_Input   : ReactNode ; // 輸入框

  methods_Second       : any ;   
  onSubmit_Second      : any ;
 
}


// 第一層分類 : 選項
type First_Option = {

  convert_First_Class? : ( x : any ) => { first_Class : any  , first_Class_Id? : string , second_Class_Num : number }

  all_First_Classes   : any[] ;
  

  click_Delete_First? : ( e : any , id : string ) => void ;

}


// 第二層分類 : 選項
type Second_Option = {

  convert_Second_Class? : ( x : any ) => string ;

  all_Second_Classes    : any[] ;
  current_Second_Class? : string ;
  
  set_Second_Class?     : ( x : any ) => void ;
  click_Delete_Second?  : ( e : any , id : string ) => void ;

}


// 整合
interface Class_Container {

  first_Class  : First_Class ;
  second_Class : Second_Class ;

}


// 分類輸入 ( for 多個 Input 欄位 )
type Multi_Input_Column = {

  label   : string ;
  type    : string ;
  name    : useFormstPlan_Form ;
  require : boolean ;
  span    : string ;

}


interface Multi_Input_Data {

 data : Multi_Input_Column[]

}


// # 帳號設定 ( RHF 表單 )
interface useForm_Account_Form {

   account_county     : string ; // 縣市
   account_district   : string ; // 行政區
   account_zipcode    : string ; // 郵遞區號

   account_serial     : string ; // 帳號 _ 區域編號

   account_shop_brand : string ; // 店家品牌
   account_shop_name  : string ; // 店家名稱
   account_shop_owner : string ; // 店家擁有者
   
   account_auth_level : string ; // 店家權限
   
}



// 帳號設定 ( 資料庫 )
interface db_Account_Columns {

   id?        : any ;

   county     : string ;
   district   : string ;
   zipcode    : string ;

   serial     : string ;

   shop_brand : string ; 
   shop_name  : string ;
   shop_owner : string ;

   auth_level : string ;

}

 