
import moment from "moment" ;
import Cookies from "js-cookie" ;
import { 
    db_Customers_Columns , 
    db_Pets_Columns ,  
    db_Pet_Class_Columns ,
    useForm_Customer_Form , 
    useForm_Pet_Form  , 
    useForm_Management_Pet_Class ,
    useForm_Service_Order_Form, 
    useForm_Service_Form,
    db_Services_Columns,
    db_Service_Order_Columns,
    useForm_Plan_Form,
    db_Plan_Columns
  } from "@utils/custom_types/form" ;



// 客戶 ( 資料表 : customers )
export const columns_Covert_Customer = ( data : useForm_Customer_Form ) : db_Customers_Columns => {


    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id


    return {

                account_id   : account_id ,         

                name         : data.customer_name ,
                serial_id    : data.customer_id ,
                sex          : data.customer_sex ,
                mobile_phone : data.customer_mobile ,
                tel_phone    : data.customer_telphone ,
                line         : data.customer_line ,
                birthday     : moment( data.customer_birthday ).format( 'YYYY-MM-DD' ) ,
                email        : data.customer_email ,
                address      : data.customer_address ,
                note         : data.customer_note 

          } ;

} ;


// 寵物 ( 資料表 : pets )
export const columns_Covert_Pet = ( data : useForm_Pet_Form ) : db_Pets_Columns => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return {

                account_id  : account_id ,  
                customer_id : null ,          // NOTE : 後續追加

                name        : data.pet_name ,
                serial      : data.pet_serial ,
                chip        : data.pet_chip ,

                pet_class   : data.pet_class ,
                pet_species : data.pet_species , 
               
                sex         : data.pet_sex ,
                weight      : data.pet_weight ,
                color       : data.pet_color ,

                birthday    : moment( data.pet_birthday ).format( 'YYYY-MM-DD' )  ,
                note        : data.pet_note    
               
          } ;

} ;

// 寵物 : 種類 ( 資料表 : pet_classes )
export const columns_Covert_Pet_Class = ( data : useForm_Management_Pet_Class ) : db_Pet_Class_Columns => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return {

                account_id  : account_id ,  
                
                pet_class   : data.management_pet_class
               
          } ;

} ;



// 服務 : 項目 ( 資料表 : services )
export const columns_Covert_Service = ( data : useForm_Service_Form ) : db_Services_Columns => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return {

                account_id  : account_id ,  
                
                name        : data.management_service_first_class ,

              //  
              //  type
              //  note
               
          } ;

} ;



// 服務 : 訂單 ( 資料表 : service_orders )
export const columns_Covert_Service_Order = ( data : useForm_Service_Order_Form ) : db_Service_Order_Columns  => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return {

            account_id     : account_id ? parseInt( account_id ) : account_id  ,  
            customer_id    : null ,          // NOTE : 後續追加
            pet_id         : null ,          // NOTE : 後續追加
            service_id     : data.service_id ,

            service_type   : data.service_type ,
            service_date   : moment( data.service_date ).format( 'YYYY-MM-DD' ) ,
            arrival_time   : data.arrival_time ,

            service_price  : data.service_price , 
            adjust_amount  : data.adjust_amount ? data.adjust_amount : 0 ,
            adjust_reason  : data.adjust_reason ,
            amount_paid    : data.amount_paid ,

            payment_method : data.payment_method ,
            payment_date   : moment( data.payment_date ).format( 'YYYY-MM-DD' ) ,

            service_note   : data.service_note ,

            shop_status    : data.shop_status
               
          } ;

} ;



// 自訂方案 ( 資料表 : plans )
export const columns_Covert_Plan = ( data : useForm_Plan_Form ) : db_Plan_Columns  => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return {

            account_id : account_id ? parseInt( account_id ) : account_id  ,  
            
            name       : data.management_plan_name ,
            count      : data.management_plan_count ,
            period     : data.management_plan_period ,
            note       : data.management_plan_note
       
          } ;

} ;

