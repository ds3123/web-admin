

import { render , screen } from "@utils/test_tools/test-utils" ;
import { Create_Employee_Form } from "@service/index" ;


describe( "測試 <Create_Employee_Form />" , () => { 
    

    describe( "結構測試" , () => { 


        type c_Type = "Create_Employee_Form" | "FormContainer" | "Section_Title" | "Employee_Form" ;


        // 抽取 _ 測試
        const test_Id_InTheDocument = ( component : c_Type ) => {

            test( `<${ component } > 有渲染` , async() => {

                render(  <Create_Employee_Form /> ) ; 
        
                const test_Component = screen.getByTestId( component ) ;
                
                expect( test_Component ).toBeInTheDocument() ;
 
            }) ;

        } ;

        test_Id_InTheDocument( "Create_Employee_Form" ) ; // 本身
        test_Id_InTheDocument( "FormContainer" ) ;
        test_Id_InTheDocument( "Section_Title" ) ;
        test_Id_InTheDocument( "Employee_Form" ) ;

    }) ; 


    describe( "從屬、包含測試" , () => { 

        beforeEach( () => render(  <Create_Employee_Form /> ) ) ;


        test( "<FormContainer> 內，含有 _ <Section_Title>" , () => {

            expect( screen.getByTestId( "FormContainer" ) ).toContainElement( screen.getByTestId( "Section_Title" ) );

        }) ;

        test( "<Section_Title> 內，含有 ‘員工資料’" , () => {

            expect( screen.getByTestId( "Section_Title" ) ).toHaveTextContent( "員工資料" ) ;

        }) ;

        test( "<FormContainer> 內，含有 _ <Employee_Form>" , () => {

            expect( screen.getByTestId( "FormContainer" ) ).toContainElement( screen.getByTestId( "Employee_Form" ) );

        } ) ;

    
    }) ; 
    


}) ; 










