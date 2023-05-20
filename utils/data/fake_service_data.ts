import { db_Services_Columns } from "../custom_types/form";
import { build , sequence , oneOf } from '@jackfranklin/test-data-bot'


// ＠服務 
const service_Item = build( {

     fields : { 
                 id         : sequence() , 
                 account_id : "1" , 
                 //name       : oneOf( "洗澡" , "美容" , "基礎" )  
                 name       : "洗澡"  
              }  

} )


// ＃ 服務項目
export const fake_Service_Data : db_Services_Columns[] = service_Item.many( 3 ) ;