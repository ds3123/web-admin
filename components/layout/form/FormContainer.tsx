

import { FC } from 'react' ;
import { T_Section } from '@/utils/custom_types/layout';


interface FormContainer extends T_Section {

    title : string ;
   
}

const FormContainer : FC< FormContainer > = ( { children , title } ) => { 


    return <div data-testid = "FormContainer" >

                { /* 標題 */ }
                <p className = "border-l-8 border-blue-700 px-3 text-2xl mb-10" > { title } </p>

                { /* 子元素區塊 */ }
                <div data-testid = "Children_Section" >

                   { children }

                </div>

           </div>

} ;

export default FormContainer
       
