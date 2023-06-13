
// import { render , screen  }  from "@testing-library/react" ;
import { render , screen , act }  from "@utils/test_tools/test-utils" ;
import { Management_Action_Service  } from "@service/index" ;


 // 因元件內有使用 useRouter()
 jest.spyOn( require('next/router') , "useRouter" ).mockReturnValue( { query : { action : "fnance" } } )
     



type c_Type = "finance" | "setting" | "product" |  "account" | "employee" ;


// 抽取 _ 測試
 const test_InTheDocument = ( action : c_Type ) => {

   test( `參數 action 值為 '${ action }' 時 , test-id 值為 '${ action }' 的元件，在畫面上` , async() => {

        await act( async() => render( <Management_Action_Service action = { action } /> ) ) ;

        const component = screen.getByTestId( `${ action }_management_controller` ) ; 

        expect( component ).toBeInTheDocument() ; 

   }) ; 
 
 } ;

describe( "測試 <Manage_Action_Service />" , () => { 


    describe( "是否依據參數 action 值，回傳相對應 test-id 元件" , () => { 

        test_InTheDocument( "finance" ) ;
        test_InTheDocument( "setting" ) ;
        test_InTheDocument( "product" ) ;
        test_InTheDocument( "account" ) ;
        test_InTheDocument( "employee" ) ;

    }) ;


    describe( "若參數 action 值，不在以上範圍內，例外處理 _" , () => { 

        test( "顯示 : 404 無此頁面" , async() => {

            const action = "other_string" ; 

            await act( async() => render( <Management_Action_Service action = { action } /> ) ) ;

            expect( screen.getByText( "404 無此頁面" )  ).toBeInTheDocument() ; 

        }) ;

    }) ;

}) ;











