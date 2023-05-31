import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 帳戶 相關 API ( 資料表 : accounts )

// [ GET ] ---------------

// 取得 _ 所有店家帳戶
export const fetch_All_Accounts = () => axios.get< any[] >( `/accounts` ).then( res => res.data ) ;             


// 取得 _ 特定郵遞區號下，所有店家帳戶
export const fetch_All_Accounts_By_Zipcode = ( zipcode : string ) => axios.get< any[] >( `/accounts/zipcode/${zipcode}` ).then( res => res.data ) ;   


// [ POST ] ---------------

// 新增 _ 帳戶
export const create_Account = ( obj : any ) => axios.post( "/accounts" , obj ) ;



// [ PUT ] ---------------




// [ DELETE ] ---------------