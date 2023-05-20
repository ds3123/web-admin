
import { First_Option } from '@/utils/custom_types/form' ;
import { FC } from 'react' ;



// 管理區 > 系統設定 > 服務 / 寵物 : 第一層分類 _ 選項內容
const FirstClass_Options_Setting_Service : FC< First_Option > = ( props ) => {


    const {  
        
             all_First_Classes , 
             convert_First_Class ,
        
             current_First_Class , 
             set_First_Class , 
             
             click_Delete_First 
            
          } = props ;


    return <>

                {

                    all_First_Classes?.map( ( x : any , y : number ) => {

                            const { first_Class , first_Class_Id , second_Class_Num  } = convert_First_Class!( x ) ;

                            return <span role = "listitem" onClick = { () => set_First_Class( x ) } className = { `inline-block px-6 py-3 mr-5 mb-8 ${ current_First_Class === first_Class ? 'bg-yellow-500 text-white' : 'text-yellow-500' } relative rounded-lg cursor-pointer` } key = { y } > 
                                        
                                        { 
                                            second_Class_Num === 0 && 

                                                <div onClick  = { e => click_Delete_First ? click_Delete_First( e , first_Class_Id! ) : () => {} } 
                                                    className = "flex items-center justify-center w-6 h-6 cusrsor-pointer rounded-full bg-red-500 text-white absolute -top-3 -right-3">
                                                    x            
                                                </div>
                                        }

                                        { first_Class } ( { second_Class_Num } ) 
                                            
                                   </span>

                        } )  

                }

           </>


} ;


export default FirstClass_Options_Setting_Service
       