

import { FC } from 'react' ;
import { Management_Page , Section_Nav } from "@layout/index" ;
import { Service_Management_Service , Pet_Management_Service , Plan_Management_Service } from '@service/index'


type Action = '服務' | '寵物' | '方案' | '住宿'  ;



// @ 頁面 : 寵物
const Setting_Management_Controller : FC = () => {


    return <div data-testid = "setting_management_controller">

               <Management_Page>
                        
                     { /* 資料內容 */ }      
                     <Section_Nav options = {  [ '服務' , '方案' , '寵物' , '住宿'  ] } >

                           {

                              ( value : Action ) => {

                                 if( value === '服務' ) return <Service_Management_Service />
                                 if( value === '方案' ) return <Plan_Management_Service />
                                 if( value === '寵物' ) return <Pet_Management_Service />
                                 if( value === '住宿' ) return <></>

                                 return <div className="border-2"> { value } </div> 

                              } 

                           }

                     </Section_Nav>

               </Management_Page>
               
           </div>
    
    
} ;


export default Setting_Management_Controller