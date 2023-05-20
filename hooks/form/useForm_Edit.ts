import { useForm , FieldValues } from 'react-hook-form' ;
import { yupResolver } from "@hookform/resolvers/yup" ;



// 封裝 _ useForm() : < 新增 / 修改 >
export const useForm_Edit = < T extends FieldValues >( schema : any , defaultValues : any = null ) => {


    const methods = useForm< T >(
                                  { 
                                    mode          : 'onBlur' ,    // 游標離開輸入框 ，才觸發 _ 驗證
                                    resolver      : yupResolver( schema ) ,
                                    defaultValues : defaultValues
                                  }
                                ) ;

    return methods ;
    

} ;