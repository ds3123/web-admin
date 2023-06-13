



import { useController } from 'react-hook-form' ;
import { FC } from 'react' ;
import { I_Custom_Select } from '@/utils/custom_types/form';



// @ 使用 useController() 自訂 _ 可重複使用 : 表單元素元件 (  <select  /> )
const Select = <T,>( { control , label , name , required , select_options , default_value , onChange } : I_Custom_Select<T> ) => {

    const {
            field      : { ref , ...inputProps } ,
            fieldState : { invalid , isTouched , isDirty , error } 
          } = useController({
                              name         : name as string ,
                              control      : control as any,
                              rules        : { required : required } ,
                              defaultValue : default_value
                            });
    
      return <div className = "mt-5 relative">

                { required && <b className="absolute -top-3 -left-2 text-red-500 text-xl"> * </b> }
                
                <label htmlFor = { name as string } className = "text-base" > { label } </label> 
                
                <div className = "flex items-center mt-[4px] h-12 border rounded-lg p-3 md:shadow-sm text-blue-900" >

                    <select { ...inputProps }  id = { name as string } aria-required = { required } className = "flex-grow outline-none text-base">

                      { select_options.map( ( x , y ) => <option key = { y } value = { x } > { x } </option> ) }
                   
                    </select> 

                </div>

                { isTouched  && error  && <span className = "text-base text-red-500 block mt-2"> { error.message } </span>}
                
             </div> ;

} ;

export default Select
       
