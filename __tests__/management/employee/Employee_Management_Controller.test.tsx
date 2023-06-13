
import { render , screen , act }  from "@utils/test_tools/test-utils" ;
import { Employee_Management_Controller } from "@controller/index"
import { Create_Button , Toggle_Panel_Right } from "@layout/index" ;

import user from "@testing-library/user-event" ;




// 因元件內有使用 useRouter()
jest.spyOn( require('next/router') , "useRouter" ).mockReturnValue( { query : { action : "fnance" } } )

 

type c_Type = "Create_Button" | "Employee_Management_Service" ;


// 抽取 _ 測試
const test_InTheDocument = ( component : c_Type ) => {

    test( `<${ component } > 有渲染` , async() => {

        await act( async() => render( <Employee_Management_Controller /> ) )  ;
 
        const test_Component = screen.getByTestId( component ) ;
        
        expect( test_Component ).toBeInTheDocument() ;
 
     } ) ;

} ;



describe( "測試 <Employee_Management_Controller />" , () => {
    

    describe( "結構測試" , () => { 


        // 新增按鈕
        test_InTheDocument( "Create_Button" ) ;

        // 表單內容 
        test_InTheDocument( "Employee_Management_Service" ) ;


    }) ; 



    describe( "行為測試" , () => { 

    
        test( "點選 <Create_Button> , 右側面板內的 <Toggle_Panel_Right> 元件包含子元件 : <Create_Employee_Form /> " , async() => {

            // 渲染 1 _ 員工設定區塊內容
            await act( async() => render( <Employee_Management_Controller /> ) )  ;

            // 渲染 2 _ 右側面板
            render( <Toggle_Panel_Right /> ) ;

            // -------- 

            // 新增員工按鈕
            const create_Button = screen.getByRole( 'button' , { name : "新增員工" } ) ;

            // 點選 _ 新增員工按鈕
            await user.click( create_Button ) ;  
          
            // 右側面板
            const Pane_Right           = screen.getByTestId( "Toggle_Panel_Right" ) ;
            // 新增員工表單元件
            const Create_Employee_Form = screen.getByTestId( "Create_Employee_Form" ) ;


            expect( Pane_Right ).toContainElement( Create_Employee_Form ) ;


        } ) ;


    }) ; 


}) ; 












