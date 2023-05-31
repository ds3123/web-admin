
import { T_Section } from '@/utils/custom_types/layout' ;
import { FC } from 'react' ;



interface Card extends T_Section {

   span        : string ;
   height?     : string ;
   background? : string ;
   shadow?     : string ;
   padding?    : string ;

}


const Card : FC< Card > = ( { children , span , height , background , shadow , padding } ) => {


    return <div className = { `w-full col-span-${ span } relative h-[${ height }vh] 
                              rounded-lg overflow-scroll overflow-x-hidden	px-4
                              ${ padding ? padding : 'p-4' } 
                              ${ background ? background : 'bg-white' } 
                              ${ shadow ? shadow : '' }` } >

              { children }

           </div>

} ;

export default Card
       