



// # 查詢 _ 帳戶相關 Query Key
export const accountKeys = {

    // 所有帳戶
    "all_accounts"            : [ "all_accounts" ] , 
    
    // 特定郵遞區號下， 所有帳戶
    "all_accounts_by_zipcode" : ( zipcode : string ) =>  [ "all_accounts_by_zipcode"  , zipcode  ] , 


}