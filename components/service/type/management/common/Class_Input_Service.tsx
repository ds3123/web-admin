
import { Input , Submit_Button } from '@layout/index' ;
import { useFormContext } from 'react-hook-form';
import { FC } from 'react' ;


type Class_Input = {

    label : string ;
    type  : string ;
    name  : string ;

}


// @ 分類類別 _ 輸入框
const Class_Input_Service : FC< Class_Input > = ( { label , type , name } ) => {


    // 取得 _ RHF 的 Context 
    const { control , formState } = useFormContext() ;

    
    return <div className = "flex items-center mt-10" >

                <Input type = { type } control = { control } label = { label } name = { name } required = { true } />

                <div className = "w-1/6 relative top-6 left-5" >

                    <Submit_Button btn_name = '提交新增' is_valid = { formState.isValid } />

                </div>

          </div>


} ;

export default Class_Input_Service
       