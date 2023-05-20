
import { FC } from 'react' ;
import { Page , Section_Banner , Section_Content , Management_Nav  , Section_Nav } from "@layout/index" ;
import { ServicePrice_Management_Service , PlanPrice_Management_Service  } from "@service/index" 


type Action = '服務' | '寵物' | '方案' | '住宿' ;



// @ 頁面 : 寵物
const Pet_Management_Controller : FC = () => {


    return <Page> 

              <Section_Banner>

                 <Management_Nav />

              </Section_Banner>

              <Section_Content>
                        
                  <Section_Nav options = {  [ '服務' , '方案'  , '寵物' , '住宿'  ] } >

                        {

                           ( value : Action ) => {

                              if( value === '服務' ) return <ServicePrice_Management_Service />
                              if( value === '方案' ) return <PlanPrice_Management_Service />
                              // if( value === '寵物' ) return <Pet_Management_Service />

                              return <div className = "border-2" > { value } </div> 

                           } 

                        }

                  </Section_Nav>

              </Section_Content>
    
           </Page>

} ;


export default Pet_Management_Controller