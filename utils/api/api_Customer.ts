
import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 客戶 相關 API ( 資料表 : customers )

// [ GET ] ---------------

// 取得 _ 特定店家，所有客戶 
export const fetch_Account_All_Customers = ( page : number = 1 , search : string ) => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/customers/account/${ account_id }?page=${ page }&search=${ search }` ).then( res => res.data ) ;
 
}
            

// 取得 _ 特定店家，特定手機號碼客戶
export const fetch_Account_Customer_By_Mobile = ( mobile : string ) => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/customers/account/${ account_id }/mobile/${ mobile }` ).then( res => res.data ) ;

}
            

// 取得 _ 特定客戶 
export const fetch_Customer_By_Id = ( customer_id : string ) => 
             axios.get< any[] >( `/customers/${ customer_id }` ).then( res => res.data ) ;             




// [ POST ] ---------------

// 新增 _ 客戶
export const create_Customer = ( obj : any ) => axios.post( "/customers" , obj ) ;




// [ PUT ] ---------------

// 修改 _ 客戶
export const update_Customer_By_Id = ( obj : any ) => axios.put( `/customers/${ obj.id }` , obj ) ;




// [ DELETE ] ---------------


// 刪除 _ 客戶
export const delete_Customer_By_Id = async( id : string ) => await axios.delete( `/customers/${ id }` ) ;

