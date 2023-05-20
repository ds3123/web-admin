
import { FC, useState } from 'react' ;

import { AiOutlineLogout } from "react-icons/ai"
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie" ;
import { Toast } from "@layout/index" ;

import { useFetch_All_Accounts } from '@/utils/react-query/hooks/account/useFetchAccounts';



// @ 登入使用者訊息
const User_Info_Service : FC = () => {


     // Next-Auth
     const { data : session } = useSession() as any ;

     // 登入者訊息 
     const userInfo = session?.userInfo ;
 
     // 登入者所屬店家訊息 
     const shopInfo = userInfo?.shop_account ;

     const { data : all_Accounts } = useFetch_All_Accounts() ;



     // 目前登入者所屬店家 id
     const current_Account_Id = Cookies.get( "account_id" ) ;


     // 設定 _ 帳號 id
     const [ account_Id , set_Account_Id ] = useState( current_Account_Id )
 

     // 變動 _ 店家帳號
     const handle_Account_Change = ( e : any ) => {

        const accountId =  e.target.value ;

        // 設定 _ Cookie ( 切換取得資料 )
        Cookies.set( "account_id" , accountId , { expires: 30 } ) ;

        // 設定 _ State
        set_Account_Id( accountId ) ;

        // 刷新頁面 
        location.reload();

     } 


     // 點選 _ 登出
     const click_Sign_Out = () => {
    
         // 刪除 Cookie
        Cookies.remove('jwt_token') ;  // JWT
        Cookies.remove('account_id') ; // 店家 id
        
        // 登出 Session  
        signOut({ callbackUrl: "/" }) ; 
        
        Toast( '登出成功' ) ;
      
     } ;



    
    return <div className = "flex items-center border-2 rounded-full pl-8 pr-20 py-2 relative" >

                {/* <img loading   = "lazy" src = "https://placeimg.com/640/480/any" 
                    className = "mr-5 inline-flex cursor-pointer h-11 w-11 rounded-full" alt = "" /> */}

                <div>

                    <p> 成員 : <span className = "text-green-600 inline-block mt-1" > 
                        { userInfo?.name } </span> 
                        { userInfo?.position_type && <span className="text-sm text-gray-400"> ( { userInfo?.position_type } )  </span> } 
                    </p>

                    <p className="flex items-center"> 店家 : 

                        { /* 下拉選單 ( for 切換帳號用 ) */ }
                        { userInfo?.id === 1 &&

                            <span className = "flex relative top-[0px] items-center ml-1 mr-3 mt-1 h-9 p-3" >

                                <select value = { account_Id } onChange = { e => handle_Account_Change( e ) } className = "flex-grow outline-none text-base -ml-4 text-red-600">

                                    { 

                                        all_Accounts.map( ( x : any , y : number ) => 
                                        
                                                            <option value = { x?.id } key = { y } className="text-red-400"> 
                                                                { x?.shop_name } ( { x?.zipcode } - { x?.serial } )
                                                            </option>  
                                                
                                                        ) 
                                    }

                                </select> 

                            </span>

                        }
                        
                        { /* 一般顯示 */ }
                        { userInfo?.id !== 1 && 

                            <span className="ml-1">

                                <span className = "text-red-600" > { shopInfo?.shop_name } </span>  
                                <span className="text-sm text-gray-400"> ( { shopInfo?.zipcode } - { shopInfo?.serial } ) </span>

                            </span>

                        } 
                     
                    </p>

                </div>
  
                { /* 登出鈕 */ }
                <AiOutlineLogout onClick = { () => click_Sign_Out() } className = "absolute right-5 text-gray-400 hover:text-black cursor-pointer" size = { 35 } />

           </div>


} ;


export default User_Info_Service
       