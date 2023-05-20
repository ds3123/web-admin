

type Columns = {

    customer : string[] ;
    pet      : string[] ;
    service  : string[] ;

}



// 各類表單欄位
export const Table_Title_Columns : Columns = {

    // 客戶 
    customer : [ '客戶姓名' , '身分證字號' , '手機號碼' , '寵物資訊' , '通訊地址' , '消費歷史' , '建檔日期' ] , 

    // 寵物 
    pet      : [ '寵物資訊' , '寵物編號' , '主人姓名' , '主人手機' , '服務記錄' , '建檔日期' ] , 
    
    // 服務
    service  : [ '服務類型' , '客戶姓名' , '寵物資訊' , '服務價格' , '個體調整' , '應收' , '實收' , '付款方式' , '付款日期' , '來店日期' ] , 





}