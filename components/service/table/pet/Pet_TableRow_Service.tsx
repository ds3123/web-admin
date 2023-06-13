
import { FC } from 'react' ;
import { db_Pets_Columns } from '@/utils/custom_types/form' ;
import { Update_Pet_Form } from "@service/index" ;
import { Row_Button , Table_Tr } from "@layout/index" ;



type Pet_Row = {

    pet : db_Pets_Columns ;  // 個別寵物資料

}



// @ 寵物表單 _ 資料列
const Pet_TableRow_Service: FC< Pet_Row > = ( { pet } ) => {

     
    // 寵物主人
    const pet_Cus = pet?.customer ;


    return <Table_Tr>

                <td className = "px-5 py-3 text-center"> 

                    <Row_Button component = { <Update_Pet_Form pet = { pet } /> } >
                        { pet?.name } ( { pet?.pet_class } / { pet?.pet_species } )
                    </Row_Button>
                
                </td>
                <td className = "px-5 py-3" >  

                    { pet?.serial }                   
                
                </td>
                <td className = "px-5 py-3 text-center"> { pet_Cus?.name } </td>
                <td className = "px-5 py-3"> { pet_Cus?.mobile_phone } </td>
                <td className = "px-5 py-3"> 4 </td>
                <td className = "px-5 py-3 text-center"> { pet?.created_at?.slice(0,10) }   </td>
               
           </Table_Tr>


} ;


export default Pet_TableRow_Service
       