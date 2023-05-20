/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table } from "@layout/index" ;
import { useEffect_Table_Props } from '@controller/common/hooks/useEffect_Table_Props';
import { Customer_TableRow_Service } from '@service/index' ;




// @ 頁面 : 客戶首頁 ( 資料列表 )
const Index_Customer_Controller : FC = () => {


    // 分頁表單所需 props
    const table_Props = useEffect_Table_Props( 'customer' ) ;

    

    return <Page> 

               { /* 區塊 Banner */ }
               <Section_Banner create_Type = '客戶' >


               </Section_Banner >


               { /* 資料表單 */ }
               <Page_Table { ...table_Props } >
                     
                  { parentValue => parentValue?.map( ( customer : any , idx : number ) => <Customer_TableRow_Service key = { idx } customer = { customer } /> )  }

               </Page_Table >

           </Page>

} ;


export default Index_Customer_Controller

