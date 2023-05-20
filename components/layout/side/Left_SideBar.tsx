/* eslint-disable react-hooks/exhaustive-deps */
import { FC , useState , useEffect  } from 'react' ;
import Link from "next/link";
import { RxSketchLogo , RxDashboard , RxPerson   } from "react-icons/rx"
import { GrDocumentNotes } from "react-icons/gr"
import {  MdPets  } from "react-icons/md"
import {  RiCustomerService2Line  } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import { BsHouseHeartFill , BsTicketPerforated } from "react-icons/bs"
import { useRouter } from 'next/router' ;




// @ 左側 _ 選項 
const Left_SideBar : FC = ( ) => {

    // Router
    const path   = useRouter()?.asPath ; 

    // 是否點選樣式
    const is_On = ( current : string , path : string ) => {
     
                     if( current === path ) return 'bg-purple-800 text-white my-4 p-3 rounded-lg inline-block' 
                  
                     return 'bg-gray-100 my-4 p-3 rounded-lg inline-block'   

                  } ;
          
     const is_Setting = path === '/management/setting' || 
                        path === '/management/price'     || 
                        path === '/management/product' ||            
                        path === '/management/account' ||            
                        path === '/management/employee' ||            
                        path === '/management/finance' ;    
               

    return <div className = "hidden md:flex fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                        
               <div className="flex flex-col items-center">

                  { /* 首頁  */ }
                  <Link href='/index_page/dashboard'> 
                     <div className = { `${ is_On( '/index_page/dashboard' , path ) }` } > 
                        <RxDashboard size = { 20 } />
                     </div>
                  </Link>

                  <span className = "border-b-[1px] border-gray-800 w-full p-2 mb-4"></span>

                  { /* 客戶 */ }
                  <Link href = '/customers/index'> 
                     <div className = { `${ is_On( '/customers/index' , path ) }` } > 
                        <RxPerson size = { 22 } />
                     </div>
                  </Link>

                  { /* 寵物 */ }
                  <Link href='/pets/index'> 
                     <div className = { `${ is_On( '/pets/index' , path ) }` } > 
                        <MdPets size = { 23 } />
                     </div>
                  </Link>

                  { /* 服務 */ }
                  <Link href='/service_orders/index'> 
                     <div className = { `${ is_On( '/service_orders/index' , path ) }` } > 
                        <RiCustomerService2Line size = { 24 } />
                     </div>
                  </Link>

                  { /* 方案 */ }
                  <Link href='/plans/index'> 
                     <div className = { `${ is_On( '/plans/index' , path ) }` } > 
                        <BsTicketPerforated size = { 23 } />
                     </div>
                  </Link>

                  { /* 住宿 */ }
                  <Link href='/lodges/index'> 
                     <div className = { `${ is_On( '/lodges/index' , path ) }` } > 
                        <BsHouseHeartFill size = { 26 } />
                     </div>
                  </Link>

                  { /* 商品訂單 */ }
                  {/* 
                     <Link href = '/product_orders/index' > 
                        <div className = { `${ is_On( '/product_orders/index' , path ) }` } > 
                           <HiOutlineShoppingBag size = { 20 } />
                        </div>
                     </Link> 
                  */}
                  
                  { /* 管理 */ }
                  <Link href='/management/setting'> 
                     <div className = { `${ is_Setting ? 'bg-purple-800 text-white' : 'bg-gray-100' } my-4 p-3 rounded-lg inline-block` } > 
                        <FiSettings size = { 23 } />
                     </div>
                  </Link>

               </div>

           </div>  

} ;

export default Left_SideBar
       