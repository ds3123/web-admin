

import { render , screen , act }  from "@utils/test_tools/test-utils" ;
import { Employee_Management_Service } from "@service/index" ; 



type c_Type =  "Employee_List_Table" ;


// 抽取 _ 測試
const test_InTheDocument = ( component : c_Type ) => {

    test( `<${ component } > 有渲染` , async() => {

        await act( async() => render( <Employee_Management_Service /> ) )  ;
 
        const test_Component = screen.getByTestId( component ) ;
        
        expect( test_Component ).toBeInTheDocument() ;
 
 
     } ) ;

} ;



describe( "測試 <Employee_Management_Service /> : 結構測試" , () => { 


    { /* 表單內容 */ }
    test_InTheDocument( "Employee_List_Table" ) ;


}) ;



