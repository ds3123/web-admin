import { FC } from 'react' ;
import { useRouter } from 'next/router' ;
import { Index_Service_Controller } from "@controller/index"



// @ 服務訂單
const Service_Orders : FC = () => {


   const router     = useRouter() ; 
   const { action } = router.query ; 
 

   // 首頁 : 服務列表
   if( action === 'index' ) return <Index_Service_Controller /> ;


   // 無此頁面
   return <div className = "flex" >

              <div className="p-5 bg-gray-500 text-white"> 404 沒有此頁面  </div>
   
          </div>

} ;

export default Service_Orders
       