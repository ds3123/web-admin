/* eslint-disable react-hooks/exhaustive-deps */

import { useState , useEffect } from 'react' ;
import { useFormContext } from 'react-hook-form' ;
import { useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form' ;



// # 處理 _ 服務 : 應付金額
export const useEffect_Service_AmountPaid = () : number => {

    
    // 取得 _ RHF 的 Context 
    const { watch , setValue } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;

    const service_price = parseInt( watch( 'service_price' ) ) ; // 服務價格
    const adjust_amount = parseInt( watch( 'adjust_amount' ) ) ; // 服務價格


    // 服務金額
    const [ service_Price , set_Service_Price ] = useState( 0 ) ;



    useEffect( () => {


        if( service_price && !adjust_amount ){ 
        
            set_Service_Price( service_price );
            setValue( 'amount_paid' , service_price.toString() ) ;
        
        }
    
        if( adjust_amount && !service_price ){ 
            
            set_Service_Price( adjust_amount ? adjust_amount : 0 ) ;
            setValue( 'amount_paid' , adjust_amount.toString() ) ;

        } 
        
        
        if( service_price && adjust_amount ){ 
            
            set_Service_Price( service_price + adjust_amount ) ;
            setValue( 'amount_paid' , ( service_price + adjust_amount ).toString() ) ;
           
        }

        return () => {

            set_Service_Price( 0 ) ;
            setValue( 'amount_paid' , '' ) ;

        }
       
       
    } , [ service_price , adjust_amount ] ) ;



    return service_Price

} ;