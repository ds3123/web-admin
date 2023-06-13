
import { T_Submit_Button } from '@/utils/custom_types/layout';
import { FC } from 'react' ;
import { BsFillSendCheckFill } from "react-icons/bs" ;



const Submit_Button : FC< T_Submit_Button > = ( { btn_name , is_valid } ) => {


    return  <button data-testid = "Submit_Button"  
                    disabled    = { !is_valid }  
                    type        = "submit" 
                    className   = { `flex ${ is_valid ? 'hover:bg-green-600' : 'bg-opacity-50' } justify-center w-full p-3 h-14 rounded-lg bg-green-400 text-white cursor-pointer` }> 
                            
                <BsFillSendCheckFill size = { 24 } className = "mr-3" /> 
                
                <p className="tracking-widest text-lg"> { btn_name } </p> 
            
            </button> 
    
        


} ;

export default Submit_Button
       