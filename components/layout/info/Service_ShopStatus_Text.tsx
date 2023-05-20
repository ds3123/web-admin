
import { FC } from 'react' ;
import { RiMapPinFill } from "react-icons/ri" ;
import { useEffect_Service_Status } from "@service/type/service/hooks/useEffect_Service_DateTime" ;




// # 到店狀態 ( 文字 ) : 已到店 / 預約今天 / 預約未來 ( for 新增 )
const Service_ShopStatus_Text : FC = ( ) => {


     // 服務狀態 : 已經店 / 預約今日 / 預約未來
     const service_Status = useEffect_Service_Status() ; 

    

    return  <span className = { `flex items-center rounded-full tracking-wider absolute bottom-0 left-2 py-2 px-6 text-white text-lg 
                                 ${ 
                                     service_Status === '到店等候中' ? 'bg-green-500'  : 
                                     service_Status === '預約今日'   ? 'bg-yellow-500' :
                                     service_Status === '預約未來'   ? 'bg-orange-500' : 
                                                              'bg-gray-400' 
                                  }` } >

                 <RiMapPinFill size = { 23 } className = "mr-2" />

                 { service_Status }

            </span>


} ;

export default Service_ShopStatus_Text