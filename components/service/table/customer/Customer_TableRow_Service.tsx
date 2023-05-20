
import { FC } from 'react' ;
import { Update_Customer_Form } from "@service/index" ;
import { db_Customers_Columns } from '@/utils/custom_types/form';
import { Row_Button } from "@layout/index" ;



type Customercus_Row = {

    customer : db_Customers_Columns ;  // 個別客戶資料

}



// @ 客戶表單 _ 資料列
const Customer_TableRow_Service: FC< Customercus_Row > = ( { customer } ) => {


    // 客戶寵物
    const cus_Pets = customer?.pet ;


    return <tr >

                <td className = "px-5 py-3" >      

                    <Row_Button component = { <Update_Customer_Form customer = { customer } /> } >
                        { customer?.name } 
                    </Row_Button>
                    
                </td>
                <td className = "px-5 py-3 text-center"> { customer?.serial_id } </td>
                <td className = "px-5 py-3 text-center"> { customer?.mobile_phone } </td>
                <td className = "px-5 py-3"> { cus_Pets?.map( ( x:any , y:any ) => <span key ={ y }>  { x.name } </span> )  }  </td>
                <td className = "px-5 py-3"> { customer?.address } </td>
                <td className = "px-5 py-3 text-center"> 歷史 </td>
                <td className = "px-5 py-3 text-center"> { customer?.created_at?.slice(0,10) } </td>

          </tr>


} ;


export default Customer_TableRow_Service
       