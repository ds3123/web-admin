
import { FC } from 'react' ;
import { Card_Row  } from "@layout/index" ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;
import { Update_Service_Order_Form }  from "@service/index" ;
import { BsFillArrowRightCircleFill } from "react-icons/bs" ;

import { useUpdate_Service_Order } from "@rq_hooks/service/useUpdateService" ;

import { columns_Covert_Service_Order } from '@utils/convert/column_Convert_Database' ;

import { db_Service_Order_Columns } from '@/utils/custom_types/form';



type Data_Row = {

   data : any[] ;

}


// 到店各狀態資料列
const Service_Data_Row : FC< Data_Row > = ( { data } ) => {


    const dispatch = useDispatch< AppDispatch >() ;


    // 點選 _ 服務訂單
    const click_Btn = ( data : any ) => dispatch( set_Right_Panel_Component( <Update_Service_Order_Form service = { data } /> ) ) ;


    // 更新服務訂單
    const update_ServiceOrder = useUpdate_Service_Order() ;


    const next_Status = ( current_Status : T_ShopStatus ) : T_ShopStatus => {
    
        if( current_Status === "尚未到店" )   return "到店等候中" ;
        if( current_Status === "到店等候中" ) return "到店美容中" ;
        if( current_Status === "到店美容中" ) return "洗完等候中" ;
        if( current_Status === "洗完等候中" ) return "已回家 ( 房 )" ;
  
        return "到店等候中"

    } ;

    const prev_Status = ( current_Status : T_ShopStatus ) : T_ShopStatus => {
    
        if( current_Status === "到店等候中" ) return "尚未到店" ;
        if( current_Status === "到店美容中" ) return "到店等候中" ;
        if( current_Status === "洗完等候中" ) return "到店美容中" ;
        if( current_Status === "已回家 ( 房 )" ) return "洗完等候中" ;
  
        return "尚未到店"

    } ;


    // 點選 _ 到店狀態 ( 向右 )
    const click_Status_Right = ( e : any , data : db_Service_Order_Columns ) => {
    
        e.stopPropagation();

        const current_Shop_Status = data?.shop_status as T_ShopStatus ;
        const next_Shop_Status    = next_Status( current_Shop_Status ) ;   


        const obj : db_Service_Order_Columns = {

                        id             : data.id ,
                        account_id     : data.account_id  ,
                        customer_id    : data.customer_id ,
                        pet_id         : data.pet_id ,
                        service_id     : data.service_id  ,
                        service_type   : data.service_type ,
                        service_date   : data.service_date ,
                        arrival_time   : data.arrival_time ,
                        service_price  : data.service_price ,
                        adjust_amount  : data.adjust_amount ,
                        adjust_reason  : data.adjust_reason ,
                        amount_paid    : data.amount_paid ,
                        payment_method : data.payment_method ,
                        payment_date   : data.payment_date ,

                        service_note   : data.service_note ,
                        shop_status    : next_Shop_Status 

                    } ;

        update_ServiceOrder( obj as any ) ;

    } ;


    // 點選 _ 到店狀態 ( 向左 )
    const click_Status_Left = ( e : any , data : db_Service_Order_Columns ) => {
    
        e.stopPropagation();

        const current_Shop_Status = data?.shop_status as T_ShopStatus ;
        const prev_Shop_Status    = prev_Status( current_Shop_Status ) ;   


        const obj : db_Service_Order_Columns = {

                        id             : data.id ,
                        account_id     : data.account_id  ,
                        customer_id    : data.customer_id ,
                        pet_id         : data.pet_id ,
                        service_id     : data.service_id  ,
                        service_type   : data.service_type ,
                        service_date   : data.service_date ,
                        arrival_time   : data.arrival_time ,
                        service_price  : data.service_price ,
                        adjust_amount  : data.adjust_amount ,
                        adjust_reason  : data.adjust_reason ,
                        amount_paid    : data.amount_paid ,
                        payment_method : data.payment_method ,
                        payment_date   : data.payment_date ,

                        service_note   : data.service_note ,
                        shop_status    : prev_Shop_Status

                    } ;

        update_ServiceOrder( obj as any ) ;

    } ;

    return <>
     
              {

                    data.map( ( x  , y ) => {

                       
                        const pet            = x?.pet ;  
                        const customer       = x?.customer ;
                        const current_Status = x?.shop_status as T_ShopStatus ;

                       
                        return <div key = { y } className = "relative" onClick = { () => click_Btn( x ) } >

                                    { /* 變更狀態 _ 向右 */ }
                                    { current_Status !== "已回家 ( 房 )" && 
                                         <p onClick = { e => click_Status_Right( e , x ) } className = "absolute cursor-pointer top-7 -right-[11px] px-1 py-0 bg-gray-200 hover:bg-gray-300 rounded-full z-10"> &rarr; </p>
                                    }

                                    { /* 變更狀態 _ 向左 */ }
                                    { current_Status !== "尚未到店" && 
                                         <p onClick = { e => click_Status_Left( e , x ) } className = "absolute cursor-pointer top-7 -left-[13px] px-1 py-0 bg-gray-200 hover:bg-gray-300 rounded-full z-10"> &larr; </p>
                                    }

                                    <Card_Row>
                                     
                                        <div className = "flex" >

                                            <div>

                                                <p className = "mb-1 ">
                                                    <span className = "text-base font-bold text-gray-600"> { pet?.name } </span> 
                                                    <span className = "text-sm text-gray-400">  ( { pet?.pet_class } / { pet?.pet_species } ) </span>
                                                </p> 

                                                <p className="text-base">
                                                    { customer?.name } ( { customer?.mobile_phone } )    
                                                </p>

                                            </div>
                                        
                                        </div>
                                    
                                    </Card_Row> 

                                </div>
                            
                    })

                    }
    
    
           </> 

} ;


export default Service_Data_Row
       