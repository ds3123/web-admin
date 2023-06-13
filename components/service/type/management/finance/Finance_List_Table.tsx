
import { FC } from 'react' ;
import { db_Customers_Columns, db_Pets_Columns, db_Service_Order_Columns, db_Services_Columns } from '@/utils/custom_types/form';
import { List_Table , Table_Tr } from "@layout/index" ; 



interface Service_Order extends db_Service_Order_Columns {

    customer : db_Customers_Columns ;  // 客戶
    pet      : db_Pets_Columns ;       // 寵物
    service  : db_Services_Columns ;   // 服務項目

}

type Table = {

   data : any[] ;

}


//  # 表單 ( 管理區 > 財務報表 )   
const Finance_List_Table : FC< Table > = ( { data } ) => {


    return <div data-testid = "Finance_List_Table" className = "flex justify-center w-full" >

                <List_Table type = "finance" >

                {  
                    data?.map( ( x : Service_Order , y : number ) => {

                        const customer = x?.customer ;
                        const pet      = x?.pet ;
                        const service  = x?.service ;

                        return  <Table_Tr key = { y } > 

                                
                                    <td> { service.name } <span className = "text-xs text-gray-500" >( { x?.id } ) </span>   </td>
                                    <td> { customer?.name } <span className = "text-xs text-gray-500" > ( { customer?.mobile_phone } ) </span> </td>
                                    <td> { pet?.name } <span className = "text-xs text-gray-500" >  ( { pet?.pet_class } / { pet?.pet_species } ) </span> </td>
                                    <td className = "text-center" > { x?.service_price } </td>
                                    <td className = "text-center" > { x?.adjust_amount } </td>
                                    <td className = "text-center" > { Number( x?.service_price ) + Number( x?.adjust_amount ) } </td>
                                    <td className = "text-center text-red-400" > { x?.amount_paid }  </td>
                                    <td className = "text-center" > { x?.service_date } </td>
                                    <td className = "text-center" > { x?.payment_date } </td>

                                </Table_Tr>

                    }) 
                }

                </List_Table>
         
           </div> 
    
    

} ;

export default Finance_List_Table
       