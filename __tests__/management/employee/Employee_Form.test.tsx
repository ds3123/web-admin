
import { render , screen , fireEvent }  from "@utils/test_tools/test-utils" ;
import { Employee_Form } from "@service/index" ;  
import { test_Input_Text , test_Select } from "@utils/test_tools/helper-functions" ; 
import moment from 'moment' ; 
import user from "@testing-library/user-event" ;

import { type_Select_Option } from "@utils/test_tools/helper-functions"





describe( "測試 <Employee_Form />" , () => { 

    describe( "結構測試 : 各個欄位是否渲染" , () => { 

        beforeEach( () => render( <Employee_Form title = "員工資料" onSubmit = { jest.fn() } /> ) ) ;
        
        test( "<input type = 'text' name = 'employee_account' >  帳號 ( 必填 )" , () => {
            
            test_Input_Text( "帳號" , "employee_account" , true ) ;

        }) ;

        test( "<input type = 'text' name = 'employee_password' > 密碼 ( 必填 )" , () => {

            test_Input_Text( "密碼" , "employee_password" , true ) ;

        }) ;

        test( "<input type = 'text' name = 'employee_name' >     姓名 ( 必填 )" , () => {

            test_Input_Text( "姓名" , "employee_name" , true ) ;

        }) ;
        
        test( "<input type = 'text' name = 'employee_nickname' > 暱稱 ( 選填 )" , () => { 
           
            test_Input_Text( "暱稱" , "employee_nickname" , false ) ;

         }) ;
        
        test( "<input type = 'text' name = 'employee_id' > 身分證字號 ( 必填 )" , () => {

            test_Input_Text( "身分證字號" , "employee_id" , true ) ;

        }) ;
        
        test( "<input type = 'text' name = 'employee_mobile' >   手機號碼 ( 必填 )" , () => {

            test_Input_Text( "手機號碼" , "employee_mobile" , true ) ;

        }) ;

        test( "<input type = 'text' name = 'employee_telphone' > 家用號碼 ( 選填 )" , () => {

            test_Input_Text( "家用號碼" , "employee_telphone" , false ) ;

        }) ;
       
        test( "<input type = 'text' name = 'employee_birthday' > 生日 ( 選填 )" , () => {

            test_Input_Text( "生日" , "employee_birthday" , false ) ;

        }) ;

        test( "<input type = 'text' name = 'employee_email' > Email ( 選填 )" , () => {

            test_Input_Text( "Email" , "employee_email" , false ) ;

        }) ;


        test( "<input type = 'text' name = 'employee_line' > Line ( 選填 )" , () => {

            test_Input_Text( "Line" , "employee_line" , false ) ;

        }) ;

        test( "<input type = 'text' name = 'employee_address' > 通訊地址 ( 選填 )" , () => {

            test_Input_Text( "通訊地址" , "employee_address" , false ) ;

        }) ;


        test( "<select name = 'employee_sex' > 性別 ( 必填 )" , () => {

            test_Select( "性別" , "employee_sex" , true , [ "請選擇" , "男" , "女" ] ) ;

        }) ;
        
        
        test( "<select name = 'employee_salary_type' > 計薪類別 ( 選填 )" , () => {

            test_Select( "計薪類別" , "employee_salary_type" , false , [ "正職" , "計時" ] ) ;

        }) ;

        test( "<select name = 'employee_position_type' > 職位類別 ( 選填 )" , () => {

           test_Select( "職位類別" , "employee_position_type" , false , [ "櫃檯" , "美容" , "接送" ] ) ;

        }) ;

        test( "<select name = 'employee_position_status' > 職位現況 ( 選填 )" , () => {

            test_Select( "職位現況" , "employee_position_status" , false , [ "在職" , "離職" ] ) ;

        }) ;

       
    }) ;
    
    describe( "狀態測試 : 初始值" , () => { 
    
       beforeEach( () => {

           render( <Employee_Form title = "員工資料" onSubmit = { jest.fn() }  /> ) ;

       }) ;


       test( "生日 _ 今日 ( 格式 : 06/10/2023 )" , () => {
       
           const birthday = screen.getByRole( "textbox" , { name : "生日" } ) ;
           const today    = moment( new Date ).format( "MM/DD/YYYY" ) ;

           expect( birthday ).toHaveValue( today ) ;
       
       }) ;

       test( "性別 _ 請選擇" , () => {

           expect( screen.getByRole( "combobox" , { name : "性別" } ) ).toHaveValue( "請選擇" ) ;
       
       }) ;

       test( "計薪類別 _ 正職" , () => {
        
           expect( screen.getByRole( "combobox" , { name : "計薪類別" } ) ).toHaveValue( "正職" ) ;
        
       }) ;

       test( "職位類別 _ 正職" , () => {

           expect( screen.getByRole( "combobox" , { name : "職位類別" } ) ).toHaveValue( "櫃檯" ) ;
        
       }) ;

       test( "職位現況 _ 在職" , () => {

           expect( screen.getByRole( "combobox" , { name : "職位現況" } ) ).toHaveValue( "在職" ) ;
        
       }) ;
      

    }) ; 

    describe( "狀態測試" , () => { 

       beforeEach( () => render( <Employee_Form title = "員工資料" onSubmit = { jest.fn() } /> ) ) ;


       test( "<form> 樣式" , () => {
       
           expect( screen.getByRole( "form" ) ).toHaveClass( "grid grid-cols-4 gap-5 relative mt-10" ); 
       
       }) ;

       test( "提交按鈕 _ 初始狀態為 : 失效( disable )" , () => {

           expect( screen.getByTestId( "Submit_Button" ) ).toBeDisabled();

       }) ;
    
    
    }) ; 
    
    describe( "行為測試" , () => { 
    

        test( "onClick() 方法會被呼叫 1 次 , 且會傳送預期的表單 : 欄位 / 值" , async() => {

            const mock_onSubmit = jest.fn() ;

            const { getByRole , getByTestId } = render( <Employee_Form title = "員工資料"  onSubmit = { mock_onSubmit } /> ) ;


            // 輸入資料
            await user.type( getByRole( "textbox" , { name : "帳號" } )  , "ds3123" ) ; 
            await user.type( getByRole( "textbox" , { name : "密碼" } )  , "123" ) ;    

            await user.type( getByRole( "textbox" , { name : "姓名" } )  , "施正仁" ) ;   
            await user.type( getByRole( "textbox" , { name : "暱稱" } )  , "Danny" ) ;   

            await user.type( getByRole( "textbox" , { name : "身分證字號" } )  , "D121700125" ) ; 

            await user.type( getByRole( "textbox" , { name : "手機號碼" } )  , "0952637122" ) ;   
            await user.type( getByRole( "textbox" , { name : "家用號碼" } )  , "(06)2366252" ) ;   
            

            await user.clear( getByRole( "textbox" , { name : "生日" } ) ) ;  // 無法用 type() 

            // fireEvent.change(screen.getByRole('textbox' , { name : "生日" } ), { 
            //     target: { 
            //       value:  today , 
            //     }, 
            // }); 


            await user.type( getByRole( "textbox" , { name : "Email" } )  , "ds312306@gmail.com" ) ;   
            await user.type( getByRole( "textbox" , { name : "Line" } )  , "Line3123" ) ;   
            
            await user.type( getByRole( "textbox" , { name : "通訊地址" } )  , "台南市東區衛國街114巷9弄5-7號" ) ;   

            await type_Select_Option( "性別" , "男" ) ;
            await type_Select_Option( "計薪類別" , "計時" ) ;
            await type_Select_Option( "職位類別" , "美容" ) ;
            await type_Select_Option( "職位現況" , "離職" ) ;



            // 點選 _ 提交鈕
            await user.click( getByTestId( "Submit_Button" ) ) ;

        
            // 呼叫 1 次   
            expect( mock_onSubmit ).toHaveBeenCalledTimes( 1 ) ;


            // 呼叫欄位參數
            expect( mock_onSubmit ).toHaveBeenCalledWith( { 

                                                            "employee_account"         : "ds3123",
                                                            "employee_password"        : "123",

                                                            "employee_name"            : "施正仁",
                                                            "employee_nickname"        : "Danny",

                                                            "employee_id"              : "D121700125",
                                                            "employee_mobile"          : "0952637122",
                                                            "employee_telphone"        : "(06)2366252",

                                                            "employee_birthday"        : null ,

                                                            "employee_email"           : "ds312306@gmail.com",
                                                            "employee_line"            : "Line3123",
                                                            "employee_address"         : "台南市東區衛國街114巷9弄5-7號",
                                                            
                                                            "employee_sex"             : "男",
                                                            
                                                            "employee_position_status" : "離職",
                                                            "employee_position_type"   : "美容",
                                                            "employee_salary_type"     : "計時",
                
                                                        } ) ;



        }) ;

        
        test.todo( "若未符合驗證條件，顯示 _ 錯誤訊息" ) ;

        test.todo( "提交按鈕 _ 填完必填欄位，狀態改為 _ 有效( disable )" ) ;

        test.todo( "移入、移出游標，若未符合驗證條件，顯示 _ 錯誤訊息" ) ;

        test.todo( "點選 _ 提交後 , 右側面板回復原先狀態" ) ;

        test.todo( "點選 _ 提交後 , <Employee_List_Table> 資料有更新" ) ;




    }) ; 

}) ; 




