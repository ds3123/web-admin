
import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table } from "@layout/index" ;
import { Pet_TableRow_Service } from '@service/index' ;




// @ 頁面 : 寵物首頁 ( 資料列表 )
const Index_Pet_Controller : FC = () => {
 

    return <Page> 

                    { /* 區塊 Banner */ }
                    <Section_Banner create_Type = '寵物' >
                      
                    </Section_Banner>

                    { /* 資料表單 */ }
                    <Page_Table data_Type = "pet" >
                        
                         { parentValue => parentValue?.map( ( pet : any , idx : number ) => <Pet_TableRow_Service key = { idx } pet = { pet } /> )  }

                    </Page_Table>

           </Page>

} ;


export default Index_Pet_Controller
       