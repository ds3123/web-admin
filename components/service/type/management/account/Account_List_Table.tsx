
import { FC } from 'react' ;
import { List_Table , Table_Tr , Row_Button } from "@layout/index" ; 
import { db_Account_Columns } from '@/utils/custom_types/form' ;
import { Update_Account_Form } from "@service/index" ;


type Table = {

   data : any[] ;
 
}


//  # 表單 ( 管理區 > 帳號設定 )   
const Account_List_Table : FC< Table > = ( { data } ) => {

 
    return <List_Table type = "account" >

                { data?.map( ( x : db_Account_Columns , y ) => {

                    return <Table_Tr key = { y }>

                              <td className = "text-left" > 
                                <Row_Button component = { <Update_Account_Form account = { x } /> }>
                                   { x?.shop_name }  <span className = "text-xs text-gray-500" >( { x?.id } )  </span>                                 
                                </Row_Button>
                              </td>
                              <td> { x?.shop_brand } </td>
                              <td> { x?.shop_owner } </td>
                              <td> { x?.county }     </td>
                              <td> { x?.district }   </td>
                              <td> { x?.zipcode }    </td>
                              <td> { x?.serial }     </td>

                          </Table_Tr>

                })}
    
           </List_Table>

} ;


export default Account_List_Table
       