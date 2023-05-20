/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect , useState } from 'react' ;
import moment from "moment";
import { useFormContext } from 'react-hook-form' ;
import { useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form' ;
import { get_H_M } from "@/utils/helper/time";



// # 處理 _ 服務狀態 : 已經店 / 預約今日 / 預約未來
export const useEffect_Service_Status = ( ) => {


    const { setValue , watch } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;
    
    // 服務狀態
    const [ status , set_Status ] = useState< T_ServiceType >( '到店等候中' ) ; 


    const service_Date = watch( 'service_date' ) ; // 到店日期 
    const arrvial_time = watch( 'arrival_time' ) ; // 到店時間
    const now          = get_H_M() ;               // 目前時間


    // 轉換格式
    const today        = moment( new Date ).format( 'YYYY-MM-DD' ) ;
    const sDate        = moment( service_Date ).format( 'YYYY-MM-DD' ) ;


    // 驗證
    useEffect( () : any  => {

    
        if( today > sDate ){ 
            alert( '不能選擇過去日期' ) ; 
            setValue( 'service_date' , new Date() as any ) ;
        }

        if( now > arrvial_time ){ 
           // alert( '不能選擇過去時間' ) ; 
            setValue( 'arrival_time' , now ) ; 
        } 

        // -----------------------

        if( sDate === today &&  now === arrvial_time ){ 

            set_Status( '到店等候中' ) ;
            setValue( 'shop_status' , '到店等候中' ) ;


        }
        if( sDate === today &&  now < arrvial_time ){

            set_Status( '預約今日' ) ;
            setValue( 'shop_status' , '尚未到店' ) ;

        }

        if( sDate > today ){

            set_Status( '預約未來' )  ;
            setValue( 'shop_status' , '尚未到店' ) ;

        }                        
       


        return () => {

            set_Status( '到店等候中' )  ;
            setValue( 'shop_status' , '到店等候中' ) ;

        }


    } , [ today , sDate , now , arrvial_time ] ) ;


    return status


} ;