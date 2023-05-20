/* eslint-disable @next/next/no-img-element */
import React  from 'react' ;

import { FcMenu } from "react-icons/fc"
import { User_Info_Service } from "@service/index"
import { Select } from '@layout/index' ;
import { useForm , SubmitHandler } from 'react-hook-form' ;


// @ 後台 Header
const Admin_Header = () => {



   const { register , control , handleSubmit , watch , trigger , formState : { errors , isValid } } = 
   useForm< any >( ) ;




    return <header className="sticky top-0 z-1 grid grid-cols-7 py-5 bg-white">

              { /* 登入帳號訊息 */ }
              <div className="col-span-3 md:col-span-2 ml-5">
  
                 <User_Info_Service />

              </div>


              { /* Menu Icon ( 手機版 ) */ }
              <div className="flex items-center justify-center md:col-span-2">

                 <FcMenu size = { 35 } className="mx-3 md:hidden" />

              </div>

              { /* 搜尋框 */ }
              {/* <div className="col-span-5 md:col-span-3 flex flex-grow items-center px-5 py-3 bg-gray-100 text-gray-600 rounded-full
                              focus-within:shadow-md">
                  <BsSearch size = { 20 } />
                  <input type="text" placeholder="search" className="flex-grow px-5 text-base bg-transparent outline-none" />

              </div> */}
                      
           </header>

} ;


export default Admin_Header
       