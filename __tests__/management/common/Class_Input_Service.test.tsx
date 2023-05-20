

import { fireEvent, render , screen, waitFor   }  from "@testing-library/react" ;
import userEvent from "@testing-library/user-event" ;
import { act } from 'react-dom/test-utils';

import { Class_Form_Service , Class_Input_Service } from "@service/index" ;
import RHF_Test_Wrapper from "@/utils/test_tools/React-Hook-Form-Wrapper" ;




describe( "" , () => { 

    const fake_onSubmit = jest.fn(); 

    // 渲染元件  
    const Wrapper = () => <RHF_Test_Wrapper>

                            { /* 表單 */ }
                              <Class_Form_Service onSubmit = { fake_onSubmit } class_label = "第一層分類" > 

                                 { /* 輸入框 */ }
                                 <Class_Input_Service type = "text" name = 'test' label = "請輸入 _ 第一層分類" />

                              </Class_Form_Service>  

                          </RHF_Test_Wrapper> ;


    // 清除 mock
    beforeEach( () => fake_onSubmit.mockClear() ) ;     



    test( "輸入框 _ 未填寫，提交鈕為失效( disable ) 狀態 ; 填寫，提交鈕為有效狀態" , async() => {

        // render 元件
        render( <Wrapper /> ) ;
        
        const input  = screen.getByLabelText( "請輸入 _ 第一層分類 :" ) as any ;
        const submit = screen.getByRole( "button" , { name : "提交新增" } ) ;
    

        // 輸入框為空
        expect( input.value ).toBe( "" ) ;
        // 提交鈕 _ 失效
        expect( submit ).toBeDisabled() ;


        // 填寫文字
        await userEvent.type( input , "test" ) ;


        // 提交鈕 _ 生效
        expect( submit ).not.toBeDisabled() ;
    
    
    }) ;

    
    // 尚未完成 2023.05.20
    test( "輸入框 _ 若未填寫，游標離開輸入框 blur，顯示錯誤訊息 : '須填寫 : 服務第一層分類'" , async() => {

        // render 元件
        render( <Wrapper /> ) ;
        
        const input  = screen.getByLabelText( "請輸入 _ 第一層分類 :" ) as any ;


        await act( async() => {

        //input.focus();
        // input.blur();

        // userEvent.tab();

        }) ;

        


        // expect( input ).toHaveErrorMessage( "須填寫 : 服務第一層分類" )

    } )


    test( "輸入文字、點選提交後，onSubmit 函式有成功接收輸入框欄位值" , async() => {

        // render 元件
        render( <Wrapper/> ) ;
            
        const input = screen.getByLabelText( "請輸入 _ 第一層分類 :" ) as any ;
        const form  = screen.getByTestId('first-class-form') ;


        await userEvent.type( input , "test" ) ;
        fireEvent.submit( form ) ;

        await waitFor( () => {

            expect( fake_onSubmit ).toHaveBeenCalled() ;                         // 是否被呼叫
            expect( fake_onSubmit ).toHaveBeenCalledWith( { "test" : "test" } ); // 是某接收到輸入框輸入的值

        } )

        
    }) ;


}) ;







