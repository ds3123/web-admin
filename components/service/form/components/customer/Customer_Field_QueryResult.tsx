
import { FC } from 'react' ;
import { useFetch_Account_Customer_By_Mobile } from '@rq_hooks/customer/useFetchCustomers' 
import { db_Customers_Columns , useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form';
import { useFormContext } from 'react-hook-form';




// @ 客戶表單，欄位查詢結果
const Customer_Field_QueryResult : FC = () => {



    // 取得 _ RHF 的 Context 
    const { watch , setValue } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;


    // 客人手機
    const customer_mobile = watch( 'customer_mobile' ) ; 


     // 依照手機號碼查詢
     const { data : cus_Mobile } = useFetch_Account_Customer_By_Mobile( customer_mobile ) ;


     // 點選 _ 標籤，帶入客戶資料
     const click_Tag = ( data : db_Customers_Columns ) => {

        setValue( 'pet_customer_id'   , data.id  ) ;   // 寵物主人資料表 id

        setValue( 'customer_name'     , data.name                 , { shouldValidate : true } ) ;
        setValue( 'customer_sex'      , data.sex                  , { shouldValidate : true } ) ;
        setValue( 'customer_id'       , data.serial_id            , { shouldValidate : true } ) ;
        setValue( 'customer_birthday' , new Date( data.birthday ) , { shouldValidate : true } ) ;
        setValue( 'customer_mobile'   , data.mobile_phone         , { shouldValidate : true } ) ;
        setValue( 'customer_telphone' , data.tel_phone            , { shouldValidate : true } ) ;
        setValue( 'customer_line'     , data.line                 , { shouldValidate : true } ) ;
        setValue( 'customer_email'    , data.email                , { shouldValidate : true } ) ;
        setValue( 'customer_address'  , data.address              , { shouldValidate : true } ) ;
        setValue( 'customer_note'     , data.note                 , { shouldValidate : true } ) ;
     
     } ;



    return <div className="md:col-span-4 p-3 h-[70px] overflow-hidden absolute -top-[15px] left-[130px]">
    
                    { /* 依手機號碼查詢  */ }
                     {  
                        cus_Mobile.length > 0 && 
                            
                            cus_Mobile?.map( ( x , y ) =>
                                                <p key = { y } onClick = { () => click_Tag( x ) }  className="px-4 py-2 mr-3 mb-5 bg-gray-200 hover:bg-gray-300 inline-block rounded-lg cursor-pointer"> 
                                                     { x?.name } ( { x?.mobile_phone } ) 
                                                </p> 
                                            )
                     }

                     { /* 新客戶 */ }
                     {
                        ( customer_mobile && cus_Mobile.length === 0 ) &&
                
                            <p className="px-4 py-2 text-lg bg-red-500 text-white rounded-lg"> 新客戶  </p>  
                
                     }
    
    
           </div>

} ;

export default Customer_Field_QueryResult
       