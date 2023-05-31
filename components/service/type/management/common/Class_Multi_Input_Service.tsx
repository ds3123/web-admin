
import { Input , Submit_Button } from '@layout/index' ;
import { useFormContext } from 'react-hook-form';
import { FC } from 'react' ;
import { Multi_Input_Data } from '@/utils/custom_types/form';

import { useSelector } from 'react-redux';
import {  RootState  } from '@store/store' ;



// @ 分類類別 _ 輸入框
const Class_Multi_Input_Service : FC< Multi_Input_Data > = ( { data } ) => {

    // 取得 _ RHF 的 Context 
    const { control , formState , setValue } = useFormContext() ;

    // 目前所點選 _ 第一層服務
    const currentFirstClass        = useSelector( ( state : RootState ) => state.management_class.current_First_Class ) ;
    const currentFirstClass_Nmae   = currentFirstClass?.name ;           // 第一層分類 _ 名稱
    const currentFirstClass_Prices = currentFirstClass?.service_price ;  // 第一層分類 _ 所有相關 : 服務價格
    const firstClass_Price         = currentFirstClass_Prices?.filter( ( x : any ) => !x?.service_content_id )[0]?.price ; // 第一層分類 _ 名稱 : 服務價格


    return <div className = "flex items-center mt-10" >
 
                { /* 多個輸入框 */ }
                <div className = "w-5/6 grid grid-cols-4 gap-4">

                    {

                        data.map( ( x , y ) => <div key = { y } className = { ` ${ x?.span } ` }>

                                                    <Input control  = { control    } 
                                                            type     = { x?.type    } 
                                                            label    = { x?.label   } 
                                                            name     = { x?.name    } 
                                                            required = { x?.require } /> 
                            
                                                </div> 
                                ) 
                                            
                    }

                    { /* 提交鈕 */ }
                    <div className = "col-span-1 relative top-12" >
                        <Submit_Button btn_name = '提交新增' is_valid = { formState.isValid } />
                    </div> 

               </div>
        

          </div>


} ;

export default Class_Multi_Input_Service
       