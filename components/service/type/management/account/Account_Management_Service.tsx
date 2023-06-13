
import { FC } from 'react' ;
import Account_List_Table from './Account_List_Table' ;
import { useFetch_All_Accounts } from "@rq_hooks/account/useFetchAccounts" ;



// # 管理區 > 帳號設定
const Account_Management_Service : FC = () => {


    // 取得 _ 所有店家帳號 
    const { data } = useFetch_All_Accounts() ;

    
    return <>

              { /* 表單 */ }
              <div className = "flex justify-center" >

                  <Account_List_Table data = { data } />
                   
              </div>

           </>

} ;


export default Account_Management_Service
       