
import { FC } from 'react' ;
import { db_Service_Order_Columns } from '@/utils/custom_types/form';
import { Row_Button , Table_Tr } from "@layout/index" ;
import { Update_Service_Order_Form  }  from "@service/index" ;


type Servcie_Row = {

    service_order : db_Service_Order_Columns ;  // 服務項目

}



// @ 服務表單 _ 資料列
const Servcie_TableRow_Service: FC< Servcie_Row > = ( { service_order } ) => {

   
    // 服務項目
    const service_item = service_order?.service ;
    
    // 客人
    const customer     = service_order?.customer ;

    // 寵物
    const pet          = service_order?.pet ;


    const service_Price = Number( service_order?.service_price )  ;
    const adjust_Amount = Number( service_order?.adjust_amount ) ;


    return <Table_Tr> 

              <td className = "px-5 py-3"> 

                 <Row_Button component = { <Update_Service_Order_Form service = { service_order  } /> } >

                    { service_item?.name } 

                 </Row_Button>
              
              </td>
              <td className = "px-5 py-3 text-center"> { customer?.name }     </td>
              <td className = "px-5 py-3"> { pet?.name } ( { pet?.pet_class } / { pet?.pet_species } ) </td>
              <td className = "px-5 py-3 text-center"> { service_order?.service_price } </td>
              <td className = "px-5 py-3 text-center"> { service_order?.adjust_amount }  </td>
              <td className = "px-5 py-3 text-center"> { service_Price + adjust_Amount } </td>
              <td className = "px-5 py-3 text-center"> { service_order?.amount_paid } </td>
              <td className = "px-5 py-3 text-center"> { service_order?.payment_method } </td>
              <td className = "px-5 py-3 text-center"> { service_order?.payment_date} </td>
              <td className = "px-5 py-3 text-center"> { service_order?.service_date} </td>
               
           </Table_Tr>


} ;


export default Servcie_TableRow_Service
       