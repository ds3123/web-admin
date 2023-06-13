
import { FC } from 'react' ;
import { Setting_Management_Controller ,
         Product_Management_Controller , 
         Account_Management_Controller , 
         Finance_Management_Controller ,
         Employee_Management_Controller
        } from "@controller/index" ;
import React from 'react';


export type M_Action = {

   action : string | string[] | undefined ;       

}


// @ 依照 url，回傳相對應頁面元件
const Management_Action_Service : FC< M_Action > = ( { action } ) => {

   if( action === 'finance' )  return <Finance_Management_Controller /> ;
   if( action === 'setting' )  return <Setting_Management_Controller /> ;   
   
   if( action === 'product' )  return <Product_Management_Controller /> ;
   
   if( action === 'account' )  return <Account_Management_Controller /> ;
   if( action === 'employee' ) return <Employee_Management_Controller /> ;


   // 無此頁面
   return <div className = "flex" >

              <div className="p-5 bg-gray-500 text-white"> 404 無此頁面  </div>
   
          </div>

          

} ;

export default Management_Action_Service
       