
import { FC , useState , useEffect } from 'react' ;

import { useFetch_Customer_By_Id } from '@/utils/react-query/hooks/customer/useFetchCustomers';
import { db_Pets_Columns, useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form';
import { useFormContext } from 'react-hook-form';





// @ 寵物表單，欄位查詢結果 
const Pet_Field_QueryResult : FC = ( ) => {


    // 取得 _ RHF 的 Context 
    const { watch , setValue } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;

    // 寵物主人資料表 id
    const pet_customer_id = watch( 'pet_customer_id' ) ;

    // 查詢 _ 寵物主人資料
    const { data } = useFetch_Customer_By_Id( pet_customer_id ) as any ;

    // 取出 _ 主人所有寵物
    const customer_Pets = data?.pet  ;


    // 點選 _ 標籤，帶入寵物資料
    const click_Tag = ( data : db_Pets_Columns ) => {

         setValue( 'pet_id'       , data.id                          , { shouldValidate : true } ) ;

         setValue( 'pet_name'     , data.name                        , { shouldValidate : true } ) ;
         setValue( 'pet_class'    , data.pet_class                   , { shouldValidate : true } ) ;
         setValue( 'pet_species'  , data.pet_species                 , { shouldValidate : true } ) ;
         setValue( 'pet_serial'   , data.serial                      , { shouldValidate : true } ) ;
         setValue( 'pet_sex'      , data.sex                         , { shouldValidate : true } ) ;
         setValue( 'pet_color'    , data.color                       , { shouldValidate : true } ) ;
         setValue( 'pet_birthday' , new Date( data.birthday ) as any , { shouldValidate : true } ) ;
         setValue( 'pet_weight'   , data.weight                      , { shouldValidate : true } ) ;
         setValue( 'pet_chip'     , data.chip                        , { shouldValidate : true } ) ;
         setValue( 'pet_note'     , data.note                        , { shouldValidate : true } ) ;
      
     } ;


    return <div className = "md:col-span-4 p-3 h-[70px] overflow-hidden absolute -top-[18px] left-[130px]" >

             { customer_Pets?.length > 0 && 
                                
                 customer_Pets?.map( ( x : any , y : number ) =>
                                      <p key = { y } onClick = { () => click_Tag( x ) }  className="px-4 py-2 mr-3 mb-5 bg-gray-200 hover:bg-gray-300 inline-block rounded-lg cursor-pointer"> 
                                              { x?.name } ( { x?.pet_class } / { x?.pet_species }  ) 
                                      </p> 
                                    )
                        }
            
                
           </div>

} ;


export default Pet_Field_QueryResult
       