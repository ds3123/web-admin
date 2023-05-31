


// 到店狀態
type T_ShopStatus =  '尚未到店' |  '到店等候中' | '到店美容中' | '洗完等候中' | '已回家 ( 房 )'  ;

// 服務類型
type T_ServiceType = '到店等候中' | '預約今日' | '預約未來' ;


type Zipcode_Info = {

    zipcode  : string ;  // 郵遞區號
    city     : string ;  // 縣市
    district : string ;  // 行政區

}
