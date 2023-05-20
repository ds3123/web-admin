



// # 查詢 _ 客戶相關 Query Key
export const customerKeys = {

    // 所有客戶
    "all_customers"          : [ "all_customers" ] , 

    // 特定店家， 所有客戶
    "account_all_customers"  : ( page : number ) =>  [ "account_all_customers"  , page  ] , 

  
    // 特定店家， 特定客戶 ( 資料表 id )
    "account_customer_by_id"  : ( customer_id : string ) =>  [ "customer_by_id" , customer_id  ] , 

    // 特定店家， 特定客戶 ( 手機號碼 )
    "account_customer_by_mobile"  : ( mobile : string ) =>  [ "account_customer_by_mobile"  , mobile  ] , 


}