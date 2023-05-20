
import { FC  } from 'react' ;
import { MdError } from 'react-icons/md';



type Bar = {

    text : string ;


}


// # 表單 _ 提示
const Form_Bar : FC< Bar > = ( { text } ) => {


    return <div className = "md:col-span-4 p-3 flex items-center justify-center bg-gray-100 text-red-700 text-xl rounded-full" > 
    
               <MdError size = { 30 } className = "mr-2" /> { text }

           </div>

} ;


export default Form_Bar
       