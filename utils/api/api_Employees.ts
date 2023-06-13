
import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 員工 相關 API ( 資料表 : employees )


// [ GET ] ---------------



// 取得 _ 特定店家，所有員工
export const fetch_Account_All_Employees = ( ) => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/employees/account/${ account_id }` ).then( res => res.data ) ;
 
}

        
// [ POST ] ---------------

// 新增 _ 員工
export const create_Employee = ( obj : any ) => axios.post( "/employees" , obj ) ;



// [ PUT ] ---------------


// 修改 _ 員工
export const update_Employee_By_Id = ( obj : any ) => axios.put( `/employees/${ obj.id }` , obj ) ;







// [ DELETE ] ---------------
