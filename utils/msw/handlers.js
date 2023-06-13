
import { rest } from "msw" ;
import Cookies from "js-cookie" ;
import { fake_Service_Data } from "@utils/data/fake_service_data" ;


// 使用者 : 所屬商店 id
const account_id = Cookies.get( "account_id" ) ? Cookies.get( "account_id" ) : "1" ;  


// 服務日期
const service_date = '2023-06-07'


// @ Mock Service Worker -> Handler 設定
export const handlers = [


            // @ 管理區 ------- 

            // # GET _ 服務 : 項目 ( 第一層 )
            rest.get( 
                      `http://localhost:8000/services/account/${ account_id }` , 
                      ( req , res , ctx ) => res( ctx.json( fake_Service_Data ) ) 
                    ) , 
                            
            // # GET _ 財務報表 ( 為消除錯誤警告，再修改 2023.06.07 )
            rest.get( 
              `http://localhost:8000/service_orders/account/${ account_id }/service_date/${ service_date }` , 
              ( req , res , ctx ) => res( ctx.json( [] ) ) 
            ) ,         

                    
            // # GET _ 帳號設定 ( 為消除錯誤警告，再修改 2023.06.07 )
             rest.get( 
                       `http://localhost:8000/accounts` , 
                       ( req , res , ctx ) => res( ctx.json( [] ) ) 
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



