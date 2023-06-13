
import { render , screen }  from "@testing-library/react" ;
import Test_Component from "./Test_Component";
import { beforeEach } from "node:test" ;
import { element , form  } from "@utils/test_tools/helper-functions" ;
import userEvent from '@testing-library/user-event'


// # 練習用
describe( "" , () => { 


   beforeEach(() => {



   })

   test( "" , () => {

       
        render( <Test_Component /> ) ;

        // # <form>



        // # <input type = "text" > 
        screen.getByRole( "textbox" , { name : "姓名" } )
        // screen.getByLabelText( "姓名" )

        // # <input type = "number" > 
        screen.getByRole( "spinbutton" , { name : "金額" } ) ;
        // screen.getByLabelText( "金額" )

        // # <select>

        screen.getByRole( "combobox" , { name : "性別" } ) ;
        // screen.getByLabelText( "性別" )

    
        // # <button>
        screen.getByRole( "button" , { name : "提交新增" } ) ;
    

        // @ 一般元素 ( 利用 querySelector ) ----

        // # <input type="hidden">
        // const hidden = document.querySelector( "input[type='submit']" ) ;


        const hidden_1 = element( "input[name='service_id']" ) ;
        const hidden_2 = element( "input[name='service_status']" ) ;
        
        expect( hidden_1 ).not.toBeNull() ;
        expect( hidden_2 ).not.toBeNull() ; 


        // # <form>
        expect( form() ).not.toBeNull() ; 
        // screen.getByRole( "form" )


        const items = screen.getAllByRole( "listitem" ) ;
        // console.log( items.length ) ;  // 3

        // # <table>

        screen.getByRole( "table" )       
        







   }) ; 

}) ;



