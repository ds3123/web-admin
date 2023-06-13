

import { render , screen } from "@testing-library/react" ;
import Management_Action  from "@/pages/management/[action]" ;



// mock 子元件，使其回傳 “Management_Action_Service”
jest.mock( "@service/type/management/common/Management_Action_Service" , () => {


    // NOTE 但此方式是 mock 寫死的，無法反應現實情況 ( 真正的 Management_Action_Service 有變化或錯誤，不會警告 ) 2023.06.07 -> ㄕ
    const Component = ( { action } : any ) => {
        
        if( action === 'finance'  ) return <div data-testid = "finance" >  Finance_Management_Controller  </div> ;
        if( action === 'setting'  ) return <div data-testid = "setting" >  Setting_Management_Controller  </div> ;   
        if( action === 'product'  ) return <div data-testid = "product" >  Product_Management_Controller  </div> ;
        if( action === 'account'  ) return <div data-testid = "account" >  Account_Management_Controller  </div> ;
        if( action === 'employee' ) return <div data-testid = "employee" > Employee_Management_Controller </div> ;

        return <div> Management_Action_Service </div>

    }

    return Component

} ) ;


type c_Type = "finance" | "setting" | "product" |  "account" | "employee" ;

 
// 抽取 _ 方法
const test_InTheDocument = ( mock : any , type : c_Type ) => {

    mock.mockReturnValueOnce( { query : { action : type } } ) ;

    render( <Management_Action /> ) ;

    expect( screen.getByTestId( type ) ).toBeInTheDocument();

} ;

   

describe( "測試 <Manage_Action />" , () => { 


    afterAll( () => {

      jest.clearAllMocks() ;

    })


   test( "父元件 <Management_Action> 有 包含/執行 _ 子元件 : <Management_Action_Service>" , async() => {


         // 因父元件內有使用 useRouter()
         jest.spyOn( require('next/router') , "useRouter" ).mockReturnValue( { query : { action : "fnance" } } )
     
         // 執行 _ 元件
         render( <Management_Action /> )  ;

         // 以 mock 回傳的字串，取得所 mock 的子元件 
         const Management_Action_Service = screen.getByText( "Management_Action_Service" )

         // 斷言 _ 所 mock 子元件在會畫面上 -> 有包含
         expect( Management_Action_Service ).toBeInTheDocument() ; 


   }) ; 
   
   

   // 此測試似乎沒有實質效用 ( Mock 回傳寫死 )，刪除 ？ 2026.06.07
   test( "父元件有成功將 action 值，傳給子元件，並回傳相對應的元件" , () => {

         // 控制回傳
         const mock_useRouter = jest.spyOn( require('next/router') , "useRouter" ) ;

         // ------

         test_InTheDocument( mock_useRouter , "finance" ) ;

         test_InTheDocument( mock_useRouter , "setting" ) ;

         test_InTheDocument( mock_useRouter , "product" ) ;

         test_InTheDocument( mock_useRouter , "account" ) ;

         test_InTheDocument( mock_useRouter , "employee" ) ;


   }) ; 

   
}) ;



