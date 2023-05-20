
import { useState , useEffect } from "react" ;
import { useFetch_Account_All_Services  } from "@/utils/react-query/hooks/service/useFetchServices" ;
import { useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices" ;




// 取得 _ 店家所有 : 服務項目 ( 加上 '請選擇' )
export const useEffect_Account_Services = () => { 

    // 取得 _ 店家所有 : 服務項目
    const { data } = useFetch_Account_All_Services() ;

    const account_Services = data.map( x => x?.name ) ;  
    account_Services.unshift( '請選擇'  )

    return { data , account_Services } ;

}



// 依照所選擇的 _ 服務項目，取得其相對應的 _ 服務項目：內容選項
export const useEffect_Account_Service_Contents = ( data : any[] , service : string ) => {

    
    // 依照目前所選擇服務類型，篩選其完整資料
    const filter_Service     = data.filter( x => x?.name === service )[ 0 ] ;
   

    // 取得 _ 該服務 : servcies 資料 id
    const service_Id         = filter_Service?.id ;  

    // 取得 _ 該服務 : 價格
    const servcie_Prices_Obj = filter_Service?.service_price.filter( ( x:any ) => x.service_id === filter_Service.id && x.service_content_id === null )[ 0 ] ;
    const servcie_Price      = servcie_Prices_Obj?.price ;

    
    // 再利用服務 id ，進行查詢 : useFetch_Service_By_Id 可查出帶有服務內容 ( 子分類 ) _ "價格" 的資料 
    const { data : _service } = useFetch_Service_By_Id( filter_Service?.id ) ;

     // 服務內容 ( 子分類 
     const service_Contents = _service?.service_content ;
   
    
     return { service_Id , servcie_Price , service_Contents } ;


}


// 處理 _ 服務項目內容 : 點選狀態
export const useEffect_Click_ServiceContent = ( current_Service : string ) => {


    // 設定 _ 服務項目內容
    const [ selected_Service_Contents , set_Selected_Service_Contents ] = useState< any[] >( [] ) ;
    
    // 所點選 _ 服務項目內容：金額總計
    const prices_Arr = selected_Service_Contents.map( x => x?.service_content_price ) ; // 先取出金額
    const selected_contentPrices_Sum = prices_Arr.reduce( ( x , y ) => x + y , 0 ) ;    // 再由 reduce 累計加總金額


    // 點選事件
    const click_Service_Content = ( content : any ) => {

        // 取得索引
        const index = selected_Service_Contents.findIndex( e => e?.id === content?.id ) ;
        
        if( index === -1 ){  // 沒有 --> 新增

            set_Selected_Service_Contents( [ ...selected_Service_Contents , content ] ) ;

        }else{               // 有 --> 刪除 
  
            selected_Service_Contents.splice( index , 1 ) ;
            set_Selected_Service_Contents( [ ...selected_Service_Contents ] ) ;

        }

    } 

  
    // 清除 _ 所選擇項目 
    useEffect( () => {

        if( current_Service === '請選擇' ) set_Selected_Service_Contents( [] ) ;
      
        return () => set_Selected_Service_Contents( [] )
       
    } , [ current_Service ] ) ;



    return { selected_contentPrices_Sum , selected_Service_Contents , click_Service_Content }


} ;