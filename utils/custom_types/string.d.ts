


// 到店狀態
type T_ShopStatus =  '尚未到店' |  '到店等候中' | '到店美容中' | '洗完等候中' | '已回家 ( 房 )'  ;

// 服務類型
type T_ServiceType = '到店等候中' | '預約今日' | '預約未來' ;


// 各類型資料列表
type T_Api_Data = 'customer' | 'pet' | 'service'  ;



type Zipcode_Info = {

    zipcode  : string ;  // 郵遞區號
    city     : string ;  // 縣市
    district : string ;  // 行政區

}


// 表單 head 欄位 _ 設定
export type T_Table_Head_Columns = {

    customer : string[] ;
    pet      : string[] ;
    service  : string[] ;

    // 管理區
    finance  : string[] ;  
    account  : string[] ;  
    employee : string[] ;  

}
