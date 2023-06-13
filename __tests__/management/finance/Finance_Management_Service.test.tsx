

import { render , screen , act }  from "@utils/test_tools/test-utils" ;
import { Finance_Management_Service } from "@service/index" ; 



type c_Type = "Query_Date_Type" | "Total_Excel_Nav" | "Finance_List_Table" ;


// 抽取 _ 測試
const test_InTheDocument = ( component : c_Type ) => {

    test( `<${ component } > 有渲染` , async() => {

        await act( async() => render( <Finance_Management_Service /> ) )  ;
 
        const test_Component = screen.getByTestId( component ) ;
        
        expect( test_Component ).toBeInTheDocument() ;
 
 
     } ) ;

} ;



describe( "測試 <Finance_Management_Service /> : 結構測試" , () => { 


    { /* 導覽列 */ }
    test_InTheDocument( "Query_Date_Type" ) ;  { /* 查詢類型 */ }
    test_InTheDocument( "Total_Excel_Nav" ) ;  { /* 共計金額 */ }


    { /* 表單內容 */ }
    test_InTheDocument( "Finance_List_Table" ) ;


}) ;



