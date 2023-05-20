

import { useForm , SubmitHandler } from 'react-hook-form' ;
import { yupResolver } from "@hookform/resolvers/yup" ;


import { schema_CreateCustomer } from "@/utils/schemas/schema_customer" ;
import { useForm_Customer_Form } from '@/utils/custom_types/form';







// 測試用
const Test_React_Hook_Form = () => {



    const { register , control , handleSubmit , watch , trigger , formState : { errors , isValid } } = 
                   useForm< useForm_Customer_Form >(
                                                      { resolver : yupResolver( schema_CreateCustomer ) }
                                                   ) ;



      const onSubmit : SubmitHandler< useForm_Customer_Form > = ( data ) => {
            
                                                            
                                                
                                                    } ;


    return <form onSubmit = { handleSubmit( onSubmit ) } >

               <input { ...register( 'customer_address' ) }/>
                   
    
           </form>  


} ;


