

import { FC , ReactNode } from 'react' ;

type Title = {

   title       : string ;
   icon?       : ReactNode ;
   background? : string ;

}


const Card_Title : FC< Title > = ( { title , icon , background } ) => {


    return <div className = {  `flex items-center justify-center ${ background ? background : 'bg-white' } p-2 mt-2 mb-6 rounded-full border shadow-md text-lg` } >
    
               { icon } <p className = "ml-3"> { title } </p>

           </div>

} ;


export default Card_Title
       