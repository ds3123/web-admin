
import { FC } from 'react' ;
import { Management_Page } from "@layout/index" ;
import { Finance_Management_Service } from "@service/index" 



// @ 頁面 : 財務
const Finance_Management_Controller : FC = () => {


    return <div data-testid = "finance_management_controller" >

              <Management_Page> 
               
                 { /* 表單內容 */ }
                 <Finance_Management_Service />

              </Management_Page>
      
           </div>

} ;


export default Finance_Management_Controller
       