
// import { render , screen }  from "@testing-library/react" ;
import { render , screen }  from "@utils/test_tools/test-utils" ;   // 使用自訂 
import { Service_Info_Form } from "@/components/service";
import { act } from 'react-dom/test-utils' ;


describe( "Service_Info_Form" , () => { 

   test( "" , async() => {


     await act( () => render( <Service_Info_Form type = "is_Create" />  ) ) ;
       

     

     screen.getByLabelText( '調整價格說明' )
    

   }) ; 

}) ;



