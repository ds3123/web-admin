import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 帳戶 相關 API ( 資料表 : accounts )

// [ GET ] ---------------

// 取得 _ 所有店家帳戶
export const fetch_All_Accounts = () => axios.get< any[] >( `/accounts` ).then( res => res.data ) ;             


// [ POST ] ---------------




// [ PUT ] ---------------




// [ DELETE ] ---------------