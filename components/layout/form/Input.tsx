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

    

      return <div className="mt-5 relative">

                { required && <b className="absolute -top-3 -left-2 text-red-500 text-xl"> * </b> }
               
                <label htmlFor = { name as string } className = "text-base" > { label } : </label>
                
                { /* 輸入框 */ }
                <div className = "flex items-center mt-1 h-12 border  rounded-lg px-2 py-2 md:shadow-sm" >

                   <input type      = { type } 
                          className = "flex-grow p-2 bg-transparent outline-none text-base text-blue-900 placeholder-gray-400" 
                          { ...inputProps } 
                          { ...rest}
                          ref               = { ref } 
                          id                = { name as string } />

                </div>

                { /* 錯誤訊息 */ }
                <span className = "text-base text-red-500 block mt-2"> { error?.message } </span>
             
             </div> ;

} ;

export default Input
       
 