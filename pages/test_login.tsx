import { useState , useEffect } from "react";
import { signIn , signOut, useSession } from "next-auth/react";

import axios from '@utils/axios' ;

// # Cookie
import Cookies from "js-cookie" ;



const LoginPage = () => {


  const [ username , setUsername ] = useState( "" ) ;
  const [ password , setPassword ] = useState( "" ) ;

  const { data : session } = useSession() as any ;


  // 提交處理
  const handleSignIn = async( e : any ) => {

    e.preventDefault() ;

    // 登入
    const result = await signIn( "credentials" , {
                                                   account  : username ,
                                                   password : password ,
                                                   redirect : false 
                                                 }) ;

   
    if (result?.error) {
       
       alert(result.error);
    
    } else {
    
       alert( 'aaa' )
      // window.location.href = '/index_page/dashboard';
    
    }

  } ;


  // 登出
  const sign_Out = () => {
  
     Cookies.remove('jwt_token') ;             // 刪除 Cookie
     signOut({ callbackUrl: "/test_login" }) ; // 登出 Session  

  } ;


  useEffect( () => {

    // 將所取得的 JWT，設定在客戶端 cookie ( 供後續前端請求時， )
    if( session ) Cookies.set( "jwt_token" , session?.accessToken, { expires: 30 });

    
    // 取得 _ 後端資料
    axios.get( "/customers" )
         .then( res => {

          console.log( '員工 : ' , res.data ) ;

    });

  } , [ session ] ) ;


  return <>

            { /* 登入 */ }
            <form onSubmit={handleSignIn}>

                { session?.accessToken && <div className="p-2 bg-blue-300">

                                       { session?.accessToken }

                </div> }  


                <label>
                  Username:
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                  Password:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button className = "p-2 bg-slate-300"  type="submit">Sign In</button>



            </form>

            <hr className="mt-10 mb-10"/>

            { /* 登出 */ }
            <button className = "p-2 bg-slate-300" onClick = { () => sign_Out() } > Sign Out </button>
  
         </>
  
};

export default LoginPage;
