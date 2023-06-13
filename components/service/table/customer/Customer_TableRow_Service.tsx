
import { FC } from 'react' ;
import { Update_Customer_Form } from "@service/index" ;
import { db_Customers_Columns } from '@/utils/custom_types/form';
import { Row_Button , Table_Tr } from "@layout/index" ;



type Customercus_Row = {

    customer : db_Customers_Columns ;  // 個別客戶資料

}



// @ 客戶表單 _ 資料列
const Customer_TableRow_Service: FC< Customercus_Row > = ( { customer } ) => {


    // 客戶寵物
    const cus_Pets = customer?.pet ;


    return <Table_Tr> 

                <td>      

                    <Row_Button component = { <Update_Customer_Form customer = { customer } /> } >
                        { customer?.name } 
                    </Row_Button>
                    
                </td>
                <td> { customer?.serial_id } </td>
                <td> { customer?.mobile_phone } </td>
                <td> { cus_Pets?.map( ( x:any , y:any ) => <span key ={ y }>  { x.name } </span> )  }  </td>
                <td className = "text-left"> { customer?.address } </td>
                <td> 歷史 </td>
                <td> { customer?.created_at?.slice(0,10) } </td>

           </Table_Tr>


} ;


export default Customer_TableRow_Service
       