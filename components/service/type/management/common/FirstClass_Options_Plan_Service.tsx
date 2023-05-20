

import { First_Option } from '@/utils/custom_types/form';
import { FC } from 'react' ;




// 管理區 > 系統設定 > 方案 : 第一層分類 _ 選項內容
const FirstClass_Options_Plan_Service : FC< First_Option > = ( props ) => {


    const {  
        
             all_First_Classes , 
             convert_First_Class ,
        
             current_First_Class , 
             set_First_Class , 
             
             click_Delete_First 
            
          } = props ;


    return <>
 
            <table className = 'table-auto w-full mb-4' >

                   <thead className="border-b-2 text-lg text-gray-400"> 
                      <tr> <th> 方案名稱 </th> <th> 使用次數 </th> <th> 使用期限 </th> <th> 方案備註 </th> <th> 刪 除 </th> </tr>
                   </thead>

                   <tbody>

                        {

                            all_First_Classes?.map( ( x : any , y : number ) => {

                                const first_Class      = x?.name ;               // 方案名稱
                                const first_Class_Id   = x?.id ;                 // 方案 id
                                const second_Class_Num = x?.plan_content?.length // 方案內容數

                                return <tr key       = { y }  onClick = { () => set_First_Class( x ) } 
                                           className = { `${ current_First_Class === first_Class ? 'bg-yellow-500 text-white' : '' } cursor-pointer h-14` } > 

                                            <td className = "h-4 pl-4">    <span className = { `${ current_First_Class === first_Class ? 'text-white' : 'text-black'}`} > { x?.name }   </span> </td>  
                                            <td className = "text-center"> <span className = { `${ current_First_Class === first_Class ? 'text-white' : 'text-black'}`} > { x?.count }  </span> </td>  
                                            <td className = "text-center"> <span className = { `${ current_First_Class === first_Class ? 'text-white' : 'text-black'}`} > { x?.period } </span> </td>  
                                            <td> <span className = { `${ current_First_Class === first_Class ? 'text-white' : 'text-black'}`} > { x?.note }   </span> </td>  
                                            <td className = "flex justify-center">
                                                  { 
                                                     second_Class_Num === 0 && 

                                                        <div onClick  = { e => click_Delete_First ? click_Delete_First( e , first_Class_Id! ) : () => {} } 
                                                            className = "text-center w-6 h-6 cusrsor-pointer rounded-full bg-red-500 text-white relative top-3">
                                                            <span className = "relative -top-1" > x </span>             
                                                        </div>
                                                  }
                                            </td>  

                                        </tr>  
                            })  

                        }

                   </tbody>


           </table>

              
           </>


} ;


export default FirstClass_Options_Plan_Service
       