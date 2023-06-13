
import { T_Section } from '@/utils/custom_types/layout' ;
import { FC , useState , useEffect } from 'react' ;

import { Page , Section_Banner , Management_Nav , Section_Content  } from "@layout/index" ;


// @ 管理區 _ 頁面範本
const Management_Page : FC< T_Section > = ( { children } ) => {


    return <div data-testid = "Management_Page" >

             <Page>

                { /* 區塊 Banner */ }
                <Section_Banner>

                   <Management_Nav />

                </Section_Banner>

                { /* 內容 */ }
                <Section_Content>
                     
                   { children }  

                </Section_Content>  

             </Page>

          </div>

} ;

export default Management_Page
       