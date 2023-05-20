import { useController } from 'react-hook-form' ;
import { I_Custom_Input } from '@/utils/custom_types/form';



// @ 使用 useController() 自訂 _ 可重複使用 : 表單元素元件 (  <input /> )
const Input = <T,>( { type , control , label , name , required , ...rest } : I_Custom_Input<T> ) => {

      const {
              field      : { ref , ...inputProps } ,
              fieldState : { invalid , isTouched , isDirty , error } 
            } = useController({
                                 name         : name as string ,
                                 control      : control as any ,
                                 rules        : { required : required } ,
                                 defaultValue : ''
                              });
    
      return <div className="mt-5">

                { required && <b className="relative -top-3 text-red-500 text-xl"> * </b> }
               
                <label htmlFor = { name as string } className = "text-lg" > { label } : </label>
                
                <div className = "flex items-center mt-1 h-12 border-2  rounded-lg px-2 py-2 md:shadow-sm" >

                   <input type      = { type } 
                          className = "flex-grow p-4 bg-transparent outline-none text-xl text-blue-900 placeholder-gray-400" 
                          { ...inputProps } 
                          { ...rest}
                          ref               = { ref } 
                          id                = { name as string } 
                          aria-errormessage = "msgID"
                          aria-invalid      = "true" />

                </div>

                { ( isTouched && error ) && <span className = "text-xl text-red-500 block mt-2"> { error.message } </span>}
             
             </div> ;

} ;

export default Input
       
 