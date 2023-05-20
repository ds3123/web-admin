



import { FC } from 'react' ;
import { Setting_Management_Controller ,
         Price_Management_Controller , 
         Service_Management_Controller , 
         Product_Management_Controller , 
         Account_Management_Controller , 
         Finance_Management_Controller ,
         Employee_Management_Controller
        } from "@controller/index" ;
import React from 'react';


export type M_Action = {

    action : string | string[] | undefined ;       

}



// @ 依照 
const Management_Action_Service : FC< M_Action > = ( { action } ) => {


   if( action === 'setting' )  return <div data-testid = "setting" >  <Setting_Management_Controller />  </div> ;
   if( action === 'price' )    return <div data-testid = "price" >    <Price_Management_Controller />    </div> ;
   
   if( action === 'service' )  return <div data-testid = "service" >  <Service_Management_Controller />  </div> ;
   
   if( action === 'product' )  return <div data-testid = "product" >  <Product_Management_Controller />  </div> ;
   if( action === 'account' )  return <div data-testid = "account" >  <Account_Management_Controller />  </div> ;
   if( action === 'employee' ) return <div data-testid = "employee" > <Employee_Management_Controller /> </div> ;
   if( action === 'finance' )  return <div data-testid = "finance" >  <Finance_Management_Controller />  </div> ;


   // 無此頁面
   return <div className = "flex" >

              <div className="p-5 bg-gray-500 text-white"> 404 沒有此頁面  </div>
   
          </div>
          

} ;

export default Management_Action_Service
       