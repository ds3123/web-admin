

import { Second_Option } from '@/utils/custom_types/form';
import { FC , useEffect, useState } from 'react' ;
import { fetch_Service_Price_By_Class_Id } from '@/utils/api/api_Service';



const map_Prices = async( second_Classes : any[] , set_Classes : ( x : any ) => void ) => {


    if( second_Classes.length > 0 ){

        second_Classes.map( async( x : any ) => {

            const first_Id  = x?.service_id ;
            const second_Id = x?.id ;
    
            // 查詢是否在 service_prices 已有此價格
            const result = await fetch_Service_Price_By_Class_Id( first_Id , second_Id ) ;
    
            // 若有，加上 
            if( result ) return x['price'] = result?.price ;
    
            return x ;
        
       });

       set_Classes( second_Classes ) ;

       return false ;

    }


    set_Classes( second_Classes ) ;


} ;



// 管理區 > 價格設定 : 第二層分類 _ 選項內容
const SecondClass_Options_Price_Service : FC< Second_Option > = ( props ) => {

    
    
    const { 

              convert_Second_Class ,
              all_Second_Classes , 

              current_Second_Class , 
              set_Second_Class
            
           } = props ;



    return <>

                {
                    all_Second_Classes?.map( ( x : any ,y  ) => {


                        return <span key = { y } onClick = { () => set_Second_Class ? set_Second_Class( x ) : () => {} }  
                                     className = { `inline-block px-6 py-3 mr-5 mb-8 ${ current_Second_Class === x?.content ? 'bg-gray-500 text-white' : 'text-gray-500' } relative rounded-lg cursor-pointer` }> 

                                    { convert_Second_Class!( x ) } 


                                    <span className="bg-white text-red-500 px-2 py-1 ml-2 rounded-full"> 
                                            $ { x?.service_content_price ? x?.service_content_price  : 0 } 元  
                                    </span> 


                               </span>   


                    }                
                                            )
                 }

           </>






} ;

export default SecondClass_Options_Price_Service
       