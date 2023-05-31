
import { FC } from 'react' ;
import { Page , Section_Banner , Page_Table , Management_Nav , Create_Button } from "@layout/index" ;
import { useEffect_Table_Props } from '@controller/common/hooks/useEffect_Table_Props' ;
import { Pet_TableRow_Service , Create_Account_Form } from '@service/index' ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;



// @ 頁面 : 帳號
const Account_Management_Controller : FC = () => {


    const dispatch = useDispatch< AppDispatch >()

    // 分頁表單所需 props
    const table_Props = useEffect_Table_Props( 'pet' ) ;

    
    // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
    const click_Create_Account = () => dispatch( set_Right_Panel_Component( <Create_Account_Form /> ) ) ;


    return <Page> 

                { /* 區塊 Banner */ }
                <Section_Banner>

                   <Management_Nav />

                </Section_Banner>

                <div className="relative -top-[120px]">
                   <Create_Button onClick = { click_Create_Account }  buttonType = '帳戶' />
                </div>

                { /* 資料表單 */ }
                <Page_Table { ...table_Props } >
                  
                   { parentValue => parentValue?.map( ( pet : any , idx : number ) => <Pet_TableRow_Service key = { idx } pet = { pet } /> )  }

                </Page_Table>
                
           </Page>

} ;


export default Account_Management_Controller
       