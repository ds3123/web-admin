
import React , { FC } from 'react' ;
import { Card , Card_Title } from "@layout/index" ;
import { BsShop } from "react-icons/bs" ;
import { BiCut } from "react-icons/bi" ;
import { GoHome } from "react-icons/go" ;
import { TbDog } from "react-icons/tb" ;
import { useFetch_Account_Date_Service_Orders } from '@/utils/react-query/hooks/service/useFetchServices';
import { get_DashToday } from "@utils/helper/date" ;
import { Service_Data_Row }  from "@service/index" ;




// # 到店處理狀態 : 到店等候中、到店美容中、洗完等候中、已回家 ( 房 )
const Shop_Status : FC = () => {

    
    // 取得 _ 今日預約資料
    const { data } = useFetch_Account_Date_Service_Orders( get_DashToday() ) ;

    const status_1 = data.filter( x => x?.shop_status === '到店等候中' ) ;
    const status_2 = data.filter( x => x?.shop_status === '到店美容中' ) ;
    const status_3 = data.filter( x => x?.shop_status === '洗完等候中' ) ;
    const status_4 = data.filter( x => x?.shop_status === '已回家 ( 房 )' ) ;


    return <Card span = '4' shadow = 'shadow-lg'>

                <div className = "grid md:grid-cols-4 gap-5" >

                    { /* 到店等候中 */ }
                    <Card span = '1' height = '70' padding = 'p-0' >

                        <Card_Title  title = "到店等候中" icon = { <BsShop size = { 27 } /> } />
                        <Service_Data_Row data = { status_1 } />

                    </Card>

                    { /* 到店美容中  */ }
                    <Card span = '1' height = '70' padding = 'p-0' > 
                    
                        <Card_Title  title = "到店美容中" icon = { <BiCut size = { 29 } /> } />
                        <Service_Data_Row data = { status_2 } />

                    </Card>
                    
                    { /* 洗完等候中 */ }
                    <Card span = '1' height = '70' padding = 'p-0' > 

                        <Card_Title  title = "洗完等候中" icon = { <TbDog size = { 32 } /> } />
                        <Service_Data_Row data = { status_3 } />
                    
                    </Card>
                    
                    { /* 已回家 ( 房 ) */ }
                    <Card span = '1' height = '70' padding = 'p-0' > 

                        <Card_Title  title = "已回家 ( 房 )" icon = { <GoHome size = { 29 } /> } />
                        <Service_Data_Row data = { status_4 } />
                    
                    </Card>

                </div>

          </Card>





} ;

export default Shop_Status
       