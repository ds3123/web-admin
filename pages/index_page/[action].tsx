import { FC } from 'react' ;
import { useRouter } from 'next/router' ;
import { Index_Dashboard_Controller } from "@controller/index"



// @ 首頁
const Index : FC = () => {


   const router     = useRouter() ; 
   const { action } = router.query ; 
 

   // 首頁 : 統計
   if( action === 'dashboard' ) return <Index_Dashboard_Controller /> ;

   // 無此頁面
   return <div className = "flex" >

              <div className="p-5 bg-gray-500 text-white"> 404 沒有此頁面  </div>
   
          </div>

} ;

export default Index
       