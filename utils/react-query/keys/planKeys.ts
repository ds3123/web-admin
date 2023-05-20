



// # 查詢 _ 自訂方案相關 Query Key
export const planKeys = {

    // 所有服務項目
    "all_plans"          : [ "all_plans" ] , 

    // 特定店家， 所有自訂方案
    "account_all_plans"  : ( ) =>  [ "account_all_plans" ] , 

    // 特定 id 方案
    "plan_by_id"         : ( plan_id : string ) =>  [ "plan_by_id"  , plan_id ] ,  



}