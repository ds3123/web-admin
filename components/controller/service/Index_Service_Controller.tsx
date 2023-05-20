
import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table } from "@layout/index" ;
import { useEffect_Table_Props } from '@controller/common/hooks/useEffect_Table_Props';
import { Service_TableRow_Service } from '@service/index' ;



// @ 頁面 : 服務首頁 ( 資料列表 )
const Index_Service_Controller : FC = () => {


    // 分頁表單所需 props
    const table_Props = useEffect_Table_Props( 'service' ) ;
    

    return <Page> 

                { /* 區塊 Banner */ }
                <Section_Banner create_Type = '服務訂單' >


                </Section_Banner>
                
            
                { /* 資料表單 */ }
                <Page_Table { ...table_Props } >
                    
                        { parentValue => parentValue?.map( ( service_order : any , idx : number ) => <Service_TableRow_Service key = { idx } service_order = { service_order } /> )  }

                </Page_Table >
    
           </Page>

} ;


export default Index_Service_Controller
       