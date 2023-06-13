
import { Input , DateInput , TimeInput  , Select , TextArea , Service_ShopStatus_Text , Service_ShopStatus_Select } from '@layout/index' ;

import { useForm , SubmitHandler } from 'react-hook-form' ;





const Test_Component = () => {

    
   const { register , control , handleSubmit  } = useForm( ) ;


    const arr = [ 1 , 2 , 3 ] ;



    return <form>


             <ul>

                { arr.map( ( x , y ) => <li key = { y } > <span> { x } </span> </li> ) }

             </ul>


             <input type = "hidden" { ...register( 'service_id' ) } />  
             <input type = "hidden" { ...register( 'service_status' ) } />  
             
             <Input type     = "text" 
                    control  = { control } 
                    label    = '姓名' 
                    name     = 'customer_name' 
                    required = { true } />

            <Input  type     = "number" 
                    control  = { control } 
                    label    = '金額' 
                    name     = 'amount_paid' 
                    required = { true } />        


            <Select control        = { control } 
                    label          = '性別' 
                    name           = 'customer_sex'  
                    select_options = { [ '請選擇' , '男' , '女' ] } 
                    default_value  = '請選擇' 
                    required       = { true } />


             <button>提交新增</button>


             <table>
                
             </table>



           </form>


} ;

export default Test_Component
       