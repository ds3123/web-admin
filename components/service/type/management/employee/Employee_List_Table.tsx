
import { FC } from 'react' ;
import { List_Table , Table_Tr , Row_Button } from "@layout/index" ; 
import { db_Account_Columns, db_Employee_Columns } from '@/utils/custom_types/form';
import Update_Employee_Form from "@service/form/management/employee/Update_Employee_Form"


type Table = {

    data : any[] ;
  
 }


interface Employee extends db_Employee_Columns { 
    
    shop_account : db_Account_Columns ; // 所屬店家

}





//  # 表單 ( 管理區 > 員工設定 )   
const Employee_List_Table : FC<Table> = ( { data } ) => {


    return <div data-testid = "Employee_List_Table" className = "w-full flex justify-center"  >

                <List_Table type = "employee" >

                    {  
                        data?.map( ( x : Employee , y : number ) => {

                            const shop = x?.shop_account ;

                            return  <Table_Tr key = { y } > 

                                        <td> 
                                            <Row_Button component = { <Update_Employee_Form employee = { x } /> } > 
                                                { x?.name }  <span className = "text-xs text-gray-500" > ( { x?.id } ) </span> 
                                            </Row_Button>
                                        </td>
                                        <td> { x?.sex } </td>
                                        <td> { x?.serial_id }  </td>
                                        <td> { x?.mobile_phone } </td>  
                                        <td> { x?.position_type } </td>
                                        <td> { x?.address } </td>
                                        <td> 
                                            { shop?.shop_name } 
                                            <span className = "text-xs text-gray-500" > ( { shop?.zipcode }-{ shop?.serial } ) </span>  
                                        </td>  
                                        

                                    </Table_Tr>

                        }) 
                    }

                </List_Table>

           </div> 

} ;


export default Employee_List_Table
       