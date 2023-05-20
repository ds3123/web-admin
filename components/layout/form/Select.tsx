



import { useController } from 'react-hook-form' ;
import { FC } from 'react' ;
import { I_Custom_Select } from '@/utils/custom_types/form';



// @ 使用 useController() 自訂 _ 可重複使用 : 表單元素元件 (  <select  /> )
const Select = <T,>( { control , label , name , required , select_options , default_value } : I_Custom_Select<T> ) => {

    const {
            field      : { ref , ...inputProps } ,
            fieldState : { invalid , isTouched , isDirty , error } 
          } = useController({
                              name         : name as string ,
                              control      : control as any,
                              rules        : { required : required } ,
                              defaultValue : default_value
                            });
    
      return <div className="mt-5">

                { required && <b className="relative -top-3 text-red-500 text-xl"> * </b> }
                
                <label htmlFor = { name as string } className = "text-lg" > { label } : </label> 
                
                <div className = "flex items-center mt-1 h-12 border-2 rounded-lg p-3 md:shadow-sm text-blue-900" >

                    <select { ...inputProps } id = { name as string } className = "flex-grow outline-none text-xl">

                      { select_options.map( ( x , y ) => <option key = { y } value = { x } > { x } </option> ) }
                   
                    </select> 

                </div>

                { isTouched  && error  && <span className = "text-xl text-red-500 block mt-2"> { error.message } </span>}
                
             </div> ;

} ;

export default Select
       
