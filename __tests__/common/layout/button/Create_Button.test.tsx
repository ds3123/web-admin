

import { render , screen }  from "@testing-library/react" ;
import { Create_Button } from "@layout/index" ;
import user from "@testing-library/user-event" ;



describe( "測試 <Create_Button />" , () => { 


    test( "輸入屬性 buttonType , 會顯示相對應的字串 : '新增 buttonType 值'" , () => {

          const mock_ButtonType = '員工'

          render( <Create_Button onClick = { jest.fn() } buttonType = { mock_ButtonType }  /> ) ;

          const create_Employee = screen.getByRole( "button" ) ;

          expect( create_Employee ).toHaveTextContent( "新增員工" ) ; 


    } ) ;

    test( "點選按鈕時 , onClick 屬性上所傳入的事件處理方法，會被呼叫 1 次" , async() => {


        const mock_OnClcik    = jest.fn() ;

        // 執行元件
        render( <Create_Button onClick = { mock_OnClcik } buttonType = "員工"  /> ) ;

        // 取得 _ 按鈕
        const create_Employee = screen.getByRole( "button" , { name : "新增員工" } ) ;

        // 點選 _ 按鈕
        await user.click( create_Employee ) ;
 
        expect( mock_OnClcik ).toHaveBeenCalledTimes( 1 ) ; 
         
    }) ;


}) ; 

    