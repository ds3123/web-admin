import { FC } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout";


interface TR extends T_Section {

    key? : number | string ;

}


// # 表單 _ <tr>
const Table_Tr : FC< TR > = ( { children , key } ) => {
 
    
    return <tr className = "border-b-2 h-12 text-center" key = { key }>

              { children }  

           </tr>

} ;

export default Table_Tr
       


