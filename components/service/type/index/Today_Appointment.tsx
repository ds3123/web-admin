
import React , { FC } from 'react' ;
import { Card , Card_Title , Card_Row  } from "@layout/index" ;
import { BsCalendar2Week } from "react-icons/bs" ;
import { useFetch_Account_Service_Orders_By_Service_Date } from '@/utils/react-query/hooks/service/useFetchServices';


import { get_DashToday } from "@utils/helper/date" ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { Update_Service_Order_Form , Service_Data_Row }  from "@service/index" ;
import { get_Today } from "@utils/helper/date" ;





// # 今日預約
const Today_Appointment : FC = () => {

    
    const dispatch = useDispatch< AppDispatch >() ;


    // 取得 _ 今日預約資料
    const { data } = useFetch_Account_Service_Orders_By_Service_Date( get_DashToday() ) ;


    // 篩選 _ 尚未到店資料
    const appointment_Data = data.filter( x => x?.shop_status === '尚未到店' ) ;



    // 點選 _ 服務訂單
    const click_Btn = ( data : any ) => dispatch( set_Right_Panel_Component( <Update_Service_Order_Form service = { data } /> ) ) ;


    // 今日
    const today = get_Today().substring( 4 , 9 ) ;


    return <Card span = '1' height = '71' shadow = 'shadow-xl' >
 
                <Card_Title  title = { `今日預約 ( ${ today } )` } background = 'bg-yellow-50' icon = { <BsCalendar2Week size = { 27 } /> } />

                <Service_Data_Row data = { appointment_Data } />
          
            </Card> 


} ;


export default Today_Appointment
       