/* eslint-disable react-hooks/exhaustive-deps */

import { FC , useEffect } from 'react' ;
import { Input } from '@layout/index' ;
import { useFormContext } from 'react-hook-form' ;
import { useForm_ServiceOrder_With_Customer_Pet_Form } from '@/utils/custom_types/form' ;
import { useEffect_Account_Service_Contents , useEffect_Click_ServiceContent } from "@service/type/service/hooks/useEffect_Service_ClassContents" ;
import { AiOutlineArrowRight } from "react-icons/ai" ;



type S_Price = {

    all_services : any[] ;  // 所有服務項目
    service_type : string ; // 服務類型

}



// ＃ 欄位 : 服務價格
const Service_Price_Column : FC< S_Price > = ( { all_services , service_type } ) => {


    // 取得 _ RHF 的 Context 
    const { control , setValue } = useFormContext< useForm_ServiceOrder_With_Customer_Pet_Form >() ;


    // 依照所選擇的 _ 服務項目，取得其相對應的 _ 服務項目：內容選項
    const { service_Id , servcie_Price , service_Contents } = useEffect_Account_Service_Contents( all_services , service_type ) ;



    const { 
            selected_contentPrices_Sum , // 所點選項目內容金額總計
            selected_Service_Contents ,  // 目前所點選 _ 服務項目 : 內容選項
            click_Service_Content        // 項目內容點選事件
          } = useEffect_Click_ServiceContent( service_type ) ;


    // 自動設定 _ 服務價格
    useEffect( () => {

       
        if( servcie_Price > 0 ) setValue( 'service_price' , servcie_Price , { shouldValidate : true } ) ;
 
        return () => setValue( 'service_price' , '' , { shouldValidate : true } ) ;
 
     } , [ servcie_Price , selected_contentPrices_Sum , service_type ] ) ;      


    // 自訂設定 _ 服務項目於 services 資料表 id
    useEffect( () => {


        // 設定 _ service_id 隱藏欄位
        if( service_Id ) setValue( 'service_id' , service_Id , { shouldValidate : true } ) ;

        return () => setValue( 'service_id' , '' , { shouldValidate : true } ) ;

        
    } , [ service_Id , service_type ] ) ;




   return <div className = "border-2 mt-6 md:col-span-4 p-5 pb-10">

            <div className = "flex" >

                <div className = "w-1/2" >
                            
                        { 
                            ( servcie_Price  && service_type !== '請選擇' ) ? <p className = "text-lg mb-3 p-2" > 
                                                                                服務類型金額 : <span className = "text-red-500"> $ { servcie_Price } 元 </span>  
                                                                            </p> : 

                            ( !servcie_Price && service_type !== '請選擇' ) ? <p className = "text-lg mb-3 p-2" >  
                                                                                服務類型金額  : <span className = "text-green-600" > 未設定 </span> 
                                                                            </p> :
                                ""
                        }

                        { selected_contentPrices_Sum > 0 &&
                        
                            <p className = "text-lg p-2" > 

                                服務項目金額 : <span className = "text-red-500 mb-3"> $ { selected_contentPrices_Sum } 元 </span>  
                                <span className = "cursor-pointer bg-green-500 hover:bg-green-600 ml-3 rounded-full pl-4 pr-3 py-2 text-[15px] text-white"
                                      onClick   = { () => setValue( 'service_price' , selected_contentPrices_Sum , { shouldValidate : true } ) }  > 
                                    設定至 <AiOutlineArrowRight size = { 15 } className = "inline-block ml-1 text-white" />
                                </span>

                            </p>
                        
                        }
                    

                </div>

                <Input type = "number" control = { control } label = '服務價格' name = 'service_price' required = { true } />

            </div>

           

            { service_Contents.length > 0 && 

                <>
                    <hr className = "mt-10 mb-10"/>

                    {
                            service_Contents.map( ( x : any , y ) => {

                                // 判斷是否已點選
                                const is_Clicked = selected_Service_Contents.findIndex( e => e?.id === x?.id )

                                return <span  key  = { y } onClick = { () => click_Service_Content( x ) } 
                                            className = { `cursor-pointer rounded-full px-[15px] py-[12px] ${ is_Clicked === -1 ? 'bg-violet-100' : 'bg-violet-400 text-white' }  mr-3` } > 

                                        { x?.content } <span className = "px-3 py-[5px]  ml-2 mr-1 rounded-full bg-white text-red-500" > $ { x?.service_content_price } 元 </span>

                                    </span> 
                            })
                        }
                
                </>
                
            } 

         </div>
   

} ;

export default Service_Price_Column
       