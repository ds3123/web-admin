
import { useEffect, useState } from 'react' ;
import { useSession , getSession } from "next-auth/react";


// 回傳 _ 登入者所屬店家 id
export const useEffect_Account_Id = () : string => {


    const [ account_Id , set_Account_Id ] = useState( '' )


    // 取得 _ session
    const checkSession = async () => {

        const session = await getSession() as any ;

        if( session ){

            const userInfo = session?.userInfo ;
            set_Account_Id( userInfo?.account_id ) ;

        }
        
    } ;


    useEffect( () => {
      
        checkSession() ;
       
    } , [] ) ;


    return account_Id



} ;