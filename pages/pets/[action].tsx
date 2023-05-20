


import { FC } from 'react' ;
import { useRouter } from 'next/router' ;
import { Index_Pet_Controller  } from "@controller/index"



// @ 寵物
const Pets : FC = () => {


   const router     = useRouter() ; 
   const { action } = router.query ; 
 

   // 首頁 : 寵物列表
   if( action === 'index' ) return <Index_Pet_Controller /> ;

   
   
   // 無此頁面
   return <div className = "flex" >

              <div className = "p-5 bg-gray-500 text-white"> 404 沒有此頁面  </div>
   
          </div>

} ;

export default Pets