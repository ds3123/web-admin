
import { Second_Option } from '@/utils/custom_types/form';
import { FC } from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import {  RootState  } from '@store/store' ;
import { AppDispatch } from '@/store/store';
import { set_Current_Second_Class } from '@/store/reducers/reducer_Management_Class';





// 管理區 > 系統設定 : 第二層分類 _ 選項內容
const SecondClass_Options_Setting_Service : FC< Second_Option > = ( props ) => {


    const dispatch = useDispatch< AppDispatch >() ;

    // 目前所點選 _ 第一層服務
    const currentSecondClass      = useSelector( ( state : RootState ) => state.management_class.current_Second_Class ) ;
    const currentSecondClass_Name = currentSecondClass?.content ;  // 名稱


    const { 

              convert_Second_Class ,

              all_Second_Classes , 
              click_Delete_Second 
            
          } = props ;


    return <div className = "mt-5 border rounded-lg px-8 pt-8 pb-4" >

                {

                    all_Second_Classes?.map( ( x : any , y ) => {

                                                     // 服務內容 _ 價格 
                                                    const contentPrice = x?.service_content_price ;

                                                    return <span key = { y } onClick = { () => dispatch( set_Current_Second_Class( x ) ) }   className = { `inline-block px-6 py-3 mr-5 mb-8 ${ currentSecondClass_Name === x?.content ? 'bg-gray-500 text-white' : 'text-gray-500 border' } relative rounded-lg cursor-pointer` }> 
                                                                                                                                    
                                                                <div onClick = { e => click_Delete_Second ? click_Delete_Second( e ,  x?.id ) : () => {} } 
                                                                        className = "flex items-center justify-center w-6 h-6 cusrsor-pointer rounded-full bg-red-500 text-white absolute -top-3 -right-3">
                                                                    x            
                                                                </div>

                                                            { convert_Second_Class!( x ) } 

                                                            { contentPrice ?  
                                                                  <span className="bg-white text-red-500 ml-2 px-2 py-1 rounded-full text-base">  
                                                                     $ { contentPrice } 元 
                                                                  </span> : '' }
                                       
                                                        </span>   


                                            } ) 

                }

           </div>






} ;

export default SecondClass_Options_Setting_Service
       