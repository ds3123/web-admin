
import { Select } from '@layout/index' ;
import { useFormContext } from 'react-hook-form' ;
import { useForm_Service_Order_Form } from '@/utils/custom_types/form' ;



// # 到店狀態 ( 下拉選單 ) : 尚未到店 / 到店等候中  ( for 編輯 )
const Service_ShopStatus_Select = () => {


    const { control , getValues } = useFormContext< useForm_Service_Order_Form >() ;

    const shop_Status = getValues( 'shop_status' ) ;
    
    const options : T_ShopStatus[] = [ '尚未到店' , '到店等候中' , '到店美容中' , '洗完等候中' , '已回家 ( 房 )'  ]  ;


    return  <Select control        = { control } 
                    label          = '到店處理狀態' 
                    name           = 'shop_status' 
                    select_options = { options } 
                    default_value  = { shop_Status }
                    required       = { true } />




} ;


export default Service_ShopStatus_Select

       