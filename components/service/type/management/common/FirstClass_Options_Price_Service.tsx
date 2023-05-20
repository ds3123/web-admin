


import { First_Option } from '@/utils/custom_types/form';
import { FC } from 'react' ;




// 管理區 > 價格設定 : 第一層分類 _ 選項內容
const FirstClass_Options_Price_Service : FC< First_Option > = ( props ) => {


    const {  

             all_First_Classes , 
             convert_First_Class ,
        
             current_First_Class , 
             set_First_Class , 
        
            } = props ;


    return <>

                {

                    all_First_Classes?.map( ( x : any , y : number ) => {


                            const { first_Class , second_Class_Num  } = convert_First_Class!( x ) ;

                            const first_Class_Price = x?.service_price[0]?.price ;  // 服務價格
                            

                            return <span key = { y } onClick = { () => set_First_Class( x ) } 
                                         className = { `inline-block px-6 py-3 mr-5 mb-8 ${ current_First_Class === first_Class ? 'bg-black text-white' : 'text-black' } relative rounded-lg cursor-pointer` } > 

                                        { first_Class } ( { second_Class_Num } ) 
                                        
                                         <span className="bg-white text-red-500 px-2 py-1 ml-2 rounded-full"> $ { first_Class_Price ? first_Class_Price : 0 } 元  </span> 
                                        
                                            
                                    </span>  

                        } )  

                }

           </>


} ;


export default FirstClass_Options_Price_Service
       