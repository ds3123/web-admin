

import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 方案 相關 API ( 資料表 : plans , plan_orders , plan_records  )


// [ GET ] ---------------


// 取得 _ 特定店家，所有自訂方案
export const fetch_Account_All_Plans = () => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/plans/account/${ account_id }` ).then( res => res.data ) ;
 
}


// 取得 _ 特定 id 自訂方案
export const fetch_Plan_By_Id = ( plan_id : string  ) => 
             axios.get< { plan_content : [] } >( `/plans/${ plan_id }` ).then( res => res.data ) ;


        
// [ POST ] ---------------

// 新增 _ 自訂方案
export const create_Plan = ( obj : any ) => axios.post( "/plans" , obj ) ;


// 新增 _ 自訂方案：內容
export const create_Plan_Content = ( obj : any ) => axios.post( "/plan_contents" , obj ) ;


// 新增 _ 自訂方案：價格
export const create_Plan_Price = ( obj : any ) => axios.post( "/plan_prices" , obj ) ;




// [ PUT ] ---------------

// 修改 _ 自訂方案
export const update_Plan_By_Id = ( obj : any ) => axios.put( `/plans/${ obj.id }` , obj ) ;


// [ DELETE ] ---------------

// 刪除 _ 自訂方案
export const delete_Plan_By_Id = async( id : string ) => await axios.delete( `/plans/${ id }` ) ;


// 刪除 _ 自訂方案 : 內容
export const delete_Plan_Content_By_Id = async( id : string ) => await axios.delete( `/plan_contents/${ id }` ) ;

