
import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 服務 相關 API ( 資料表 : services , service_contents , service_orders , service_prices , service_order_process  )


// [ GET ] ---------------



// 取得 _ 特定店家，所有服務 : 訂單
export const fetch_Account_All_Service_Orders = ( page : number = 1 , search : string ) => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/service_orders/account/${ account_id }?page=${ page }&search=${ search }` ).then( res => res.data ) ;
 
}


// 取得 _ 特定店家，所有服務 : 項目
export const fetch_Account_All_Services = () => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/services/account/${ account_id }` ).then( res => res.data ) ;

} 


// 取得 _ 特定服務 : 項目
export const fetch_Service_By_Id = ( service_id : string  ) => 
             axios.get< { service_content : [] } >( `/services/${ service_id }` ).then( res => res.data ) ;



// 取得 _ 特定服務 ( id ) : 價格
export const fetch_Service_Price_By_Id = ( service_id : string  ) => 
             axios.get< any >( `/service_prices/${ service_id }` ).then( res => res.data ) ;



// 取得 _ 特定服務 ( 第 1,2 分類層級 id ) : 價格
export const fetch_Service_Price_By_Class_Id = ( first_class_id : string , second_class_id? : string  ) => 
             axios.get< any >( `/service_prices/first_class_id/${ first_class_id }/second_class_id/${ second_class_id }` ).then( res => res.data ) ;



// 取得 _ 特定店家，特定 [ 到店日期 ] _ 服務訂單
export const fetch_Account_Service_Orders_By_Service_Date = ( service_date : string  ) => {   

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/service_orders/account/${ account_id }/service_date/${ service_date }` ).then( res => res.data ) ;

}


// 取得 _ 特定店家，特定 [ 付款日期 ] _ 服務訂單
export const fetch_Account_Service_Orders_By_Payment_Date = ( payment_date : string  ) => {   

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/service_orders/account/${ account_id }/payment_date/${ payment_date }` ).then( res => res.data ) ;

}

        
// [ POST ] ---------------


// 新增 _ 服務 : 訂單
export const create_Service_Order = ( obj : any ) => axios.post( "/service_orders" , obj ) ;


// 新增 _ 服務 : 項目
export const create_Service = ( obj : any ) => axios.post( "/services" , obj ) ;


// 新增 _ 服務 : 項目內容
export const create_Service_Content = ( obj : any ) => axios.post( "/service_contents" , obj ) ;



// 新增 _ 服務 : 價格
export const create_Service_Price = ( obj : any ) => axios.post( "/service_prices" , obj ) ;




// [ PUT ] ---------------

// 修改 _ 服務 : 訂單
export const update_Service_Order_By_Id = ( obj : any ) => axios.put( `/service_orders/${ obj.id }` , obj ) ;


// 修改 _ 服務 : 價格
export const update_Service_Price_By_Id = ( obj : any ) => axios.put( `/service_prices/${ obj.id }` , obj ) ;



// [ DELETE ] ---------------

// 刪除 _ 服務 : 訂單
export const delete_Service_Order_By_Id = async( id : string ) => await axios.delete( `/service_orders/${ id }` ) ;


// 刪除 _ 服務 : 項目 ( 第一層分類 )
export const delete_Service_By_Id = async( id : string ) => await axios.delete( `/services/${ id }` ) ;


// 刪除 _ 服務 : 內容 ( 第二層分類 )
export const delete_Service_Content_By_Id = async( id : string ) => await axios.delete( `/service_contents/${ id }` ) ;

