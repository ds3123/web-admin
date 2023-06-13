

import { render , screen , act, renderHook }  from "@utils/test_tools/test-utils" ;
import user from "@testing-library/user-event" ;
import { FormContainer } from "@layout/index" ;
import { Employee_Form } from "@service/index" ;  
import { useForm  } from "react-hook-form" ;



describe( "測試 <FormContainer /> " , () => { 



    describe( "結構測試" , () => { 

        beforeEach( () => render( <FormContainer title = "新增資料" > </FormContainer>  ) ) ;
       
        test( "<FormContainer> 有渲染" , () => {

            expect( screen.getByTestId( "FormContainer" ) ).toBeInTheDocument();
            
        }) ;

        test( "<p> title 標題 有渲染" , () => {

             expect( screen.getByText( "新增資料" )  ).toBeInTheDocument();
            
        }) ;

        test( "<Children_Section> 有渲染" , () => {
        
            expect( screen.getByTestId( "Children_Section" ) ).toBeInTheDocument();
        
        }) ;

    }) ; 


    describe( "狀態測試" , () => { 
    
        test( "title 樣式" , () => {

            render( <FormContainer title = "新增資料" > </FormContainer> ) ;
        
            expect( screen.getByText( "新增資料" ) ).toHaveClass( "border-l-8 border-blue-700 px-3 text-2xl mb-10" ) ;

        }) ;

    }) ; 



}) ; 




 