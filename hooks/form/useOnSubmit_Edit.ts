import { SubmitHandler , FieldValues } from 'react-hook-form' ;



// 封裝 useForm() onSubmit 事件 : < 新增 / 修改 >
export const useOnSubmit_Edit = < T extends FieldValues >( submit_Func : ( data : T ) => void ) => {


    const onSubmit : SubmitHandler< T > = ( data ) => {
    
         submit_Func( data ) ;

    } ;

    return onSubmit

} ; 