
import { T_Section } from '@/utils/custom_types/layout';
import { FC } from 'react' ;


const Section_Content : FC<T_Section> = ( props ) => {


    return <div className="bg-white mt-1 px-8 pt-16 pb-24 min-h-[100vh]" >
              
              { props.children }

           </div>

} ;

export default Section_Content
       