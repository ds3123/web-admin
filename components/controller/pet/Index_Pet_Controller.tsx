
import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table } from "@layout/index" ;
import { useEffect_Table_Props } from '@controller/common/hooks/useEffect_Table_Props' ;
import { Pet_TableRow_Service } from '@service/index' ;



// @ 頁面 : 寵物首頁 ( 資料列表 )
const Index_Pet_Controller : FC = () => {



    // 分頁表單所需 props
    const table_Props = useEffect_Table_Props( 'pet' ) ;



    return <Page> 

                    { /* 區塊 Banner */ }
                    <Section_Banner create_Type = '寵物' >

                      
                    </Section_Banner>

                    { /* 資料表單 */ }
                    <Page_Table { ...table_Props } >
                        
                         { parentValue => parentValue?.map( ( pet : any , idx : number ) => <Pet_TableRow_Service key = { idx } pet = { pet } /> )  }

                    </Page_Table>

           </Page>

} ;


export default Index_Pet_Controller
       