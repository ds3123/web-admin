
import { FC } from 'react' ;
import { Management_Page , Create_Button } from "@layout/index" ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;

import { Create_Employee_Form , Employee_Management_Service } from '@/components/service' ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;





// @ 頁面 : 員工
const Employee_Management_Controller : FC = () => { 


    const dispatch = useDispatch< AppDispatch >() ;


    // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
    const click_Create_Employee = () => dispatch( set_Right_Panel_Component( <Create_Employee_Form /> ) ) ;


    return <div data-testid = "employee_management_controller">

               <Management_Page>

                   { /* 新增按鈕 */ } 
                   <div className = "relative -top-[180px]" >
                      <Create_Button onClick = { click_Create_Employee }  buttonType = '員工' />
                   </div>

                   { /* 資料表單 */ }
                   <Employee_Management_Service />
                
                </Management_Page> 

           </div>


}

export default Employee_Management_Controller
       