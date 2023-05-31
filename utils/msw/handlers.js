
import { rest } from "msw" ;
import Cookies from "js-cookie" ;
import { fake_Service_Data } from "@utils/data/fake_service_data" ;


// 使用者 : 所屬商店 id
const account_id = Cookies.get( "account_id" ) ;  



// @ Mock Service Worker -> Handler 設定
export const handlers = [

            // # GET _ 服務 : 項目 ( 第一層 )
            rest.get( 
                      `http://localhost:8000/services/account/${ account_id }` , 
                      ( req , res , ctx ) => res( ctx.json( fake_Service_Data ) ) 
                    ) , 
                 
            // # POST _ 服務 : 項目 ( 第一層 )
            rest.post( 
                       `http://localhost:8000/services/account/${ account_id }` , 
                       ( req , res , ctx ) => { 

                           const { test } = req.body ;
                        
                           return res( ctx.json( { "gg" : 3333 } ) ) 
                        
                       }
            ) , 


       ] ;



