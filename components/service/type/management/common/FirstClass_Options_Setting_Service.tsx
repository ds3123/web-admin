
import { set_Current_First_Class } from '@/store/reducers/reducer_Management_Class';
import { AppDispatch } from '@/store/store';
import { First_Option } from '@/utils/custom_types/form' ;
import { FC } from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import {  RootState  } from '@store/store' ;


// 管理區 > 系統設定 > 服務 / 寵物 : 第一層分類 _ 選項內容
const FirstClass_Options_Setting_Service : FC< First_Option > = ( props ) => {

    const dispatch = useDispatch< AppDispatch >() ;

    // 目前所點選 _ 第一層服務
    const currentFirstClass      = useSelector( ( state : RootState ) => state.management_class.current_First_Class ) ;
    const currentFirstClass_Name = currentFirstClass?.name ;  // 名稱


    const {  
        
             all_First_Classes , 
             convert_First_Class ,
             
             click_Delete_First 
            
          } = props ;


    return <div className = "mt-5 border rounded-lg px-8 pt-8 pb-4" >

                {

                    all_First_Classes?.map( ( x : any , y : number ) => {

                            // 服務價格 
                            const prices       = x?.service_price ;
                            const servicePrice = prices.filter( ( s : any ) => s?.service_id === x?.id && !s?.service_content_id )[0]?.price ;

                            const { first_Class , first_Class_Id , second_Class_Num  } = convert_First_Class!( x ) ;

                            return <span role = "listitem" onClick = { () => dispatch( set_Current_First_Class( x ) ) } className = { `inline-block px-6 py-3 mr-5 mb-8 ${ currentFirstClass_Name === first_Class ? 'bg-black text-white' : 'text-black border' } relative rounded-lg cursor-pointer` } key = { y } > 
                                        
                                        { 
                                            second_Class_Num === 0 && 

                                                <div onClick  = { e => click_Delete_First ? click_Delete_First( e , first_Class_Id! ) : () => {} } 
                                                    className = "flex items-center justify-center w-6 h-6 cusrsor-pointer rounded-full bg-red-500 text-white absolute -top-3 -right-3">
                                                    x            
                                                </div>
                                        }

                                        { first_Class }
                                        
                                        { servicePrice ?  <span className="bg-white text-red-500 ml-2 px-2 py-1 rounded-full text-base">  $ { servicePrice } 元 </span> : '' }
                                       
                                        
                                            
                                   </span>

                        } )  

                }

           </div>


} ;


export default FirstClass_Options_Setting_Service
       