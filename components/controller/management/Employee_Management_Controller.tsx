
import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table , Management_Nav } from "@layout/index" ;
import { useEffect_Table_Props } from '@controller/common/hooks/useEffect_Table_Props' ;
import { Pet_TableRow_Service } from '@service/index' ;




// @ 頁面 : 員工
const Employee_Management_Controller : FC = () => { 


    // 分頁表單所需 props
    const table_Props = useEffect_Table_Props( 'pet' ) ;


    return <Page> 

              <Section_Banner>

                 <Management_Nav />

              </Section_Banner>

              { /* 資料表單 */ }
              <Page_Table { ...table_Props } >
                  
                 { parentValue => parentValue?.map( ( pet : any , idx : number ) => <Pet_TableRow_Service key = { idx } pet = { pet } /> )  }

              </Page_Table>
    
           </Page>


}

export default Employee_Management_Controller
       