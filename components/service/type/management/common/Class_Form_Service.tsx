import { T_Section } from '@/utils/custom_types/layout' ;
import { FC } from 'react' ;
import { useFormContext } from 'react-hook-form' ;


interface First extends T_Section {

    onSubmit    : any ;
    class_label : string ;

}


// ＠ 分類表單
const Class_Form_Service : FC < First > = ( { children , onSubmit , class_label } ) => {

    // 取得 _ RHF 的 Context 
    const { handleSubmit } = useFormContext() ;

    const onSubmitWrapper = ( data : any ) => {
        
        // 先處理表單的值，然後再调用 onSubmit 函数
        onSubmit( data ) ;
          
    
    };


    return <form data-testid = "class-form" onSubmit = { handleSubmit( onSubmitWrapper ) } className = "text-base" >
            
              <p className = "text-lg" > { class_label } : </p>

              {  children  }
             
           </form>

} ;


export default Class_Form_Service
       