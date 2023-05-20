
import { FC } from 'react' ;
import { useRouter } from 'next/router' ;
import { Index_Customer_Controller } from "@controller/index"
import { GetServerSideProps } from 'next';






// @ 住宿
const Lodges : FC = () => {


   const router     = useRouter() ; 
   const { action } = router.query ; 


  // ---------------
    

   // 首頁 :  客戶列表
   if( action === 'index' ) return <Index_Customer_Controller /> ;

   
   // 無此頁面
   return <div className = "flex" >

              <div className="p-5 bg-gray-500 text-white"> 404 沒有此頁面  </div>
   
          </div>

} ;

export default Lodges





export const getServerSideProps : GetServerSideProps = async (context) => {
    
 
    
    return {
      props: {
          
      },
    };
  };
       