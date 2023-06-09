import { T_Table_Head_Columns } from "@/utils/custom_types/string";




// 各類表單欄位
export const Table_Head_Columns : T_Table_Head_Columns = {

    // 客戶 
    customer : [ '客戶姓名' , '身分證字號' , '手機號碼' , '寵物資訊' , '通訊地址' , '消費歷史' , '建檔日期' ] , 

    // 寵物 
    pet      : [ '寵物資訊' , '寵物編號' , '主人姓名' , '主人手機' , '服務記錄' , '建檔日期' ] , 
    
    // 服務
    service  : [ '服務類型' , '客戶姓名' , '寵物資訊' , '服務價格' , '個體調整' , '應收' , '實收' , '付款方式' , '付款日期' , '來店日期' ] , 

  
    // # 管理區 ----

    // 財務報表
    finance  : [ '服務類型' , '客戶資料' , '寵物資料' , '服務價格' , '個體調整' , '應收金額' , '實收金額' , '來店日期' , '付款日期 ' ] ,

    // 帳號設定
    account  : [ '店家名稱', '店家品牌' , '店家負責人'   , '縣市' , '行政區' , '郵遞區號' , '區域編號' ,  ] ,
    
    // 員工設定
    employee  : [ '姓 名'   , '性 別' , '身分證字號' , '手機號碼' , '職務類別' , '通訊地址'  , '所屬店別'  ] ,


}