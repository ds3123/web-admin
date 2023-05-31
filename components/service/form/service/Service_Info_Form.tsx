
/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' ;
import { I_Form_Type, useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form' ;
import { useFormContext } from 'react-hook-form' ;
import { Input , DateInput , TimeInput  , Select , TextArea , Service_ShopStatus_Text , Service_ShopStatus_Select } from '@layout/index' ;
import { useEffect_Account_Services } from "@service/type/service/hooks/useEffect_Service_ClassContents" ;
import { useEffect_Service_Status } from "@service/type/service/hooks/useEffect_Service_DateTime" ;
import { useEffect_Service_AmountPaid } from "@service/type/service/hooks/userEffect_Service_Price" ;
import { Service_Price_Column } from '@service/index' ;
import moment from 'moment';
import { useSession } from "next-auth/react" ;


 


// @ 服務訂單訊息欄位
const Service_Info_Form : FC< I_Form_Type > = ( { type } ) => {


    // 登入者訊息 
    const { data : session } = useSession() as any ;
    const userInfo = session?.userInfo ;


    // 取得 _ RHF 的 Context 
    const { control , watch , register } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;
    const service_type = watch( 'service_type' ) ;  // 服務類型
    
  

    // 取得 _ 店家所有 : 服務項目
    const { data : all_services , account_Services } = useEffect_Account_Services() ;


    // 取得 _ 已付金額
    const amount_Paid = useEffect_Service_AmountPaid() ;



    return <>
                
                { /* 隱藏欄位 */ }
                <input type = "hidden" { ...register( 'service_id' ) } />  { /* 服務項目於 services 資料表 id  */ }
                <input type = "hidden" { ...register( 'shop_status' ) } />  { /* 到店狀態 : 尚未到店、到店等候中 ...  */ }

                <Select control = { control } label = '服務類型' name = 'service_type' select_options = { account_Services } default_value = '請選擇' required = { true } />

                <DateInput control = { control } label = "到店日期" name = "service_date" required = { true } />

                <TimeInput control = { control } label = "到店時間" name = "arrival_time" required = { false } />  

                { /*  服務狀態 : 已經到店 / 預約今日 / 預約未來  */ } 
                <div className = "relative" >

                    { type === 'is_Create' &&  <Service_ShopStatus_Text /> }
                    { type === 'is_Update' &&  <Service_ShopStatus_Select /> }
                  
                </div>

                { /* 服務價格  */ }  
                { service_type !== '請選擇' &&  <Service_Price_Column all_services = { all_services } service_type = { service_type } />  }

                <Input type = "number" control = { control } label = '自訂調整價格' name = 'adjust_amount' required = { false } />

                <div className = "col-span-3" >
                    <Input type = "text" control = { control } label = '調整價格說明' name = 'adjust_reason' required = { false } />
                </div>

                <TextArea control = { control } label = '服務備註' name = 'service_note'  required = { false }  />

                <div className = "mt-6 text-base" >
                    <p className = "" > 應付金額 : </p>
                    <p className = "relative top-3 text-red-600"> $ { amount_Paid } </p>               
                </div>

                <Input type = "number" control = { control } label = '實付金額' name = 'amount_paid' required = { true } />

                <Select control = { control } label = '付款方式' name = 'payment_method'  select_options = { [ '現金' , '方案' ] } default_value = '現金' required = { true } />

                <DateInput control = { control } label = "付款日期" name = "payment_date" required = { true } />

                <div className = "mt-6 flex text-base items-center" >
                    <p className = "" > 經手人員 : </p>
                    <p className = "ml-2 text-blue-900"> { userInfo?.name }  </p>               
                </div>

                <div className = "mt-6 flex text-base items-center" >
                    <p className = "" > 建檔日期 : </p>
                    <p className = "ml-2 text-blue-900"> { moment( new Date ).format( 'YYYY-MM-DD' ) }  </p>               
                </div>

           </>

} ;

export default Service_Info_Form
       


