
import { FC } from 'react' ;
import { Management_Page , Create_Button } from "@layout/index" ;
import { Account_Management_Service  , Create_Account_Form } from '@service/index' ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;


// @ 頁面 : 帳號
const Account_Management_Controller : FC = () => {


    const dispatch = useDispatch< AppDispatch >()

    
    // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
    const click_Create_Account = () => dispatch( set_Right_Panel_Component( <Create_Account_Form /> ) ) ;

    
    return <div data-testid = "account_management_controller">

                <Management_Page>

                     { /* 新增按鈕 */ } 
                     <div className = "relative -top-[180px]" >
                        <Create_Button onClick = { click_Create_Account }  buttonType = '帳戶' />
                     </div>

                     { /*  資料表單 */ }
                     <Account_Management_Service />

                </Management_Page>

           </div>

} ;

export default Account_Management_Controller
       