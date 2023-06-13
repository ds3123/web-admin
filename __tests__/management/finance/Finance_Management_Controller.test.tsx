

//import { render , screen } from "@testing-library/react" ;
import { render , screen , act }  from "@utils/test_tools/test-utils" ;
import { Finance_Management_Controller } from "@controller/index" ;



describe( "測試 <Finance_Management_Controller /> : 結構測試 " , () => {

    // 因元件內有使用 useRouter()
    jest.spyOn( require('next/router') , "useRouter" ).mockReturnValue( { query : { action : "fnance" } } )
    
    
    afterAll( () => {

        jest.clearAllMocks() ;

    } )


    // 範本頁面 
    test( "<Management_Page> 有渲染" , async() => {

       await act( async() => render( <Finance_Management_Controller /> ) ) ;
        
       const Management_Page = screen.getByTestId( "Management_Page" ) ;

       expect( Management_Page ).toBeInTheDocument() ; 

    }) ;  
   
    // 主要內容
    test( "<Finance_Management_Service> 有渲染" , async() => {

        await act( async() => render( <Finance_Management_Controller /> ) ) ;
        
        const Finance_Management_Service = screen.getByTestId( "Finance_Management_Service" ) ;
 
        expect( Finance_Management_Service ).toBeInTheDocument() ; 

    }) ;  

}) ; 



