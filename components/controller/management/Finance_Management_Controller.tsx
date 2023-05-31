
import { FC } from 'react' ;
import { Page , Section_Banner , Section_Content , Page_Table , Management_Nav } from "@layout/index" ;
import { Finance_Management_Service } from "@service/index" 



// @ 頁面 : 財務
const Finance_Management_Controller : FC = () => {


    return <Page> 

                { /* 區塊 Banner */ }
                <Section_Banner>

                   <Management_Nav />

                </Section_Banner>
                
                <Section_Content>
                
                   <Finance_Management_Service />

                </Section_Content>
    
           </Page>

} ;


export default Finance_Management_Controller
       