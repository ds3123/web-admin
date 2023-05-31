


// # 查詢 _ 服務相關 Query Key
export const serviceKeys = {

    // 所有服務項目
    "all_services"          : [ "all_services" ] , 

    // 特定店家， 所有服務：訂單
    "account_all_service_orders"  : ( page : number ) =>  [ "account_all_service_orders" , page  ] , 

    // 特定店家， 所有服務：項目
    "account_all_service_items"  : () =>  [ "account_all_service_items"  ] , 


    // 取得 _ 特定店家，特定 [ 到店日期 ] _ 服務訂單
    "account_service_orders_by_service_date" : ( service_date : string ) => [  "account_service_orders_by_service_date" , service_date  ] ,


    // 特定服務項目
    "service_by_id" : ( service_id : string ) =>  [ "service_by_id"  , service_id ] ,  
     
     // 特定服務價格
     "service_price_by_id" : ( price_id : string ) =>  [ "service_price_by_id"  , price_id ] ,  



}