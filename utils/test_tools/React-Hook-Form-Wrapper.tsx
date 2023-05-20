
import { FC } from 'react' ;
import { FormProvider, useForm  } from 'react-hook-form';
import { T_Section } from '../custom_types/layout';



// # React Hook Form 測試用 Context Provider
const RHF_Test_Wrapper : FC< T_Section> = ( { children } ) => {


     // 取得 _ useForm() 方法，供 <FormProvider> 
     const methods = useForm() ;

     return <FormProvider { ...methods } >
          
                { children }

            </FormProvider>

}

export default RHF_Test_Wrapper
       

