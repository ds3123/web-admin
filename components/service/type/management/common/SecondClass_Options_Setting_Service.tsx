
import { Second_Option } from '@/utils/custom_types/form';
import { FC } from 'react' ;





// 管理區 > 系統設定 : 第二層分類 _ 選項內容
const SecondClass_Options_Setting_Service : FC< Second_Option > = ( props ) => {

    const { 

              convert_Second_Class ,

              all_Second_Classes , 
              click_Delete_Second 
            
           } = props ;


    return <>

                {

                    all_Second_Classes?.map( ( x : any ,y  ) => <span key = { y } className = { `inline-block px-6 py-3 mr-5 mb-8 bg-gray-100 relative rounded-lg cursor-pointer` }> 
                                                                                            
                                                                        <div onClick   = { e => click_Delete_Second ? click_Delete_Second( e ,  x?.id ) : () => {} } 
                                                                            className = "flex items-center justify-center w-6 h-6 cusrsor-pointer rounded-full bg-red-500 text-white absolute -top-3 -right-3">

                                                                            x            
                                                                        
                                                                        </div>
            
                                                                        {  convert_Second_Class!( x)  } 
                                                                                        
                                                                  </span>   
                                            )
                                            

                    

                }

           </>






} ;

export default SecondClass_Options_Setting_Service
       