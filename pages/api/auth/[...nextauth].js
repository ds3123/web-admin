import NextAuth from "next-auth" ;
import CredentialsProvider from "next-auth/providers/credentials" ;
import axios from '@utils/axios' ;

import { serialize , parse } from "cookie" ;
import { set , get } from "lodash" ;


export const authOptions = {

  
  // 設定 _ 一個或多個 : 授權供應者 ( Auth Providers ) ，例如 : Google , Facebok , Line ...
  providers: [

    
    CredentialsProvider({

                          name        : "Credentials",
                          authorize   : async( credentials ) => {

                                                                    const obj = {
                                                                                  username : credentials.account ,
                                                                                  password : credentials.password ,
                                                                                }
                                                                       
                                                                    // 發出請求取得 JWT 
                                                                    const { data } = await axios.post( '/employees/authenticate' , obj ) ;

                                                                  
                                                                    const user = { 
                                                                                    token : data?.access_token , // 供以下 jwt 回呼函式使用
                                                                                    user  : data?.user_info ,    // 登入者訊息 
                                                                                  }

                                                                    if( user ){

                                                                      return user ; 

                                                                    }else{

                                                                      return null ;

                                                                    }
                                                                  
                                                                }

                        })
               ],


  callbacks : {

                async jwt( { token , user } ) {

                    //  加上 accessToken、userInfo 屬性，保存由後端取得的 token, user_info ( 供以下 session 函式使用 ) 
                    if( user?.token ) token.accessToken = user?.token ;
                    if( user?.user )  token.userInfo    = user?.user ;

                    return token

                } ,

                async session( { session , token , user } ) {

                    /*

                        1. 附加 accessToken、userInfo 屬性，接收以上 jwt 函式設定的 token , user_info
                        2. 讓客戶端頁面，能透過 session 的 accessToken , userInfo 屬性，取得由後端取得的 JWT 以及 登入者訊息

                    */ 
              
                    if( token.userInfo )    session.userInfo    = token.userInfo ; 
                    if( token.accessToken ) session.accessToken = token.accessToken ;

                    return session ;
                  
                } ,

                async signOut(message) {
                  
                  // return true;
                },
              },

  // pages     : {
  //               signIn: "/test_login",  
  //               signOut: "/",
  //             }

} ;

export default NextAuth( authOptions ) ;
 