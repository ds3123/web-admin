

import { First_Option } from '@/utils/custom_types/form';
import { FC } from 'react' ;

import { useDispatch , useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import {  RootState  } from '@store/store' ;
import { set_Current_First_Class } from '@/store/reducers/reducer_Management_Class';



// 管理區 > 系統設定 > 方案 : 第一層分類 _ 選項內容
const FirstClass_Options_Plan_Service : FC< First_Option > = ( props ) => {

    const dispatch = useDispatch< AppDispatch >() ;

    // 目前所點選 _ 第一層服務
    const currentFirstClass      = useSelector( ( state : RootState ) => state.management_class.current_First_Class ) ;
    const currentFirstClass_Nmae = currentFirstClass?.name ;  // 名稱


    const {  
        
            all_First_Classes , 
            click_Delete_First 
            
          } = props ;


    return <div className="border mt-2 p-5 rounded-lg">
 
            <table className = 'table-auto w-full mb-10' >

                   <thead className="border-b-2 text-base text-gray-400"> 
                      <tr><th> 方案名稱 </th><th> 使用次數 </th><th> 使用期限 </th><th> 方案備註 </th><th> 刪 除 </th></tr>
                   </thead>

                   <tbody>

                        {

                            all_First_Classes?.map( ( x : any , y : number ) => {

                                const first_Class      = x?.name ;               // 方案名稱
                                const first_Class_Id   = x?.id ;                 // 方案 id
                                const second_Class_Num = x?.plan_content?.length // 方案內容數

                                return <tr key       = { y }  onClick = { () => dispatch( set_Current_First_Class( x ) ) } 
                                           className = { `${ currentFirstClass_Nmae === first_Class ? 'bg-yellow-500 text-white' : '' } cursor-pointer h-14` } > 

                                            <td className = "h-4 pl-4">    <span className = { `${ currentFirstClass_Nmae === first_Class ? 'text-white' : 'text-black'}`} > { x?.name }   </span> </td>  
                                            <td className = "text-center"> <span className = { `${ currentFirstClass_Nmae === first_Class ? 'text-white' : 'text-black'}`} > { x?.count }  </span> </td>  
                                            <td className = "text-center"> <span className = { `${ currentFirstClass_Nmae === first_Class ? 'text-white' : 'text-black'}`} > { x?.period } </span> </td>  
                                            <td> <span className = { `${ currentFirstClass_Nmae === first_Class ? 'text-white' : 'text-black'}`} > { x?.note }   </span> </td>  
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

              
           </div>


} ;


export default FirstClass_Options_Plan_Service
       