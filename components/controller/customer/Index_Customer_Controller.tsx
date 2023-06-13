/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table } from "@layout/index" ;
import { Customer_TableRow_Service } from '@service/index' ;




// @ 頁面 : 客戶首頁 ( 資料列表 )
const Index_Customer_Controller : FC = () => {

    

    return <Page> 

               { /* 區塊 Banner */ }
               <Section_Banner create_Type = '客戶' >

               </Section_Banner >


               { /* 資料表單 */ }
               <Page_Table  data_Type = "customer" >
                     
                  { parentValue => parentValue?.map( ( customer : any , idx : number ) => <Customer_TableRow_Service key = { idx } customer = { customer } /> )  }

               </Page_Table >

           </Page>

} ;


export default Index_Customer_Controller

