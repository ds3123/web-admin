
import { T_Section } from '@/utils/custom_types/layout';
import { FC } from 'react' ;



const Card_Row : FC< T_Section > = ( { children } ) => {


    return <span className = "bg-gray-50 hover:bg-gray-100 rounded-lg mb-3 px-5 py-4 flex items-center cursor-pointer relative" >  

               { children }                         
                
           </span>

} ;

export default Card_Row
       