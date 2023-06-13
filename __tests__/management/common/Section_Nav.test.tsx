
import { render , screen , fireEvent, waitFor }  from "@testing-library/react" ;
import { Section_Nav } from "@/components/layout";



const fake_Options = [ '服務' , '方案' , '寵物' , '住宿' ] ;


test( "依據所輸入 options 內容，渲染相對應選項" , () => {

   const { getAllByRole } = render( 
                                    <Section_Nav options = { fake_Options } > 
                                       { () => <></> }
                                    </Section_Nav> 
                                  ) ;

   const options = getAllByRole( 'listitem' ) ;

   expect( options[0] ).toHaveTextContent( '服務' ) ;
   expect( options[1] ).toHaveTextContent( '方案' ) ;
   expect( options[2] ).toHaveTextContent( '寵物' ) ;
   expect( options[3] ).toHaveTextContent( '住宿' ) ;
   expect( options[4] ).toBe( undefined ) ;
   

}) ;



test( "當點選選項，Section_Nav 元件會傳遞相對應值，給其 children 子元件 " , async() => {

    const children = jest.fn( () => <></> )

        render( 
                <Section_Nav options = { fake_Options } > 
                  { children }
                </Section_Nav> 
              ) ;

      // 取得所有選項        
      const options = screen.getAllByRole( 'listitem' ) ;

      // 逐一點選選項，並進行斷言
      options.forEach( ( x , y ) => {
       
        fireEvent.click( x ) ;

        expect( children ).toHaveBeenCalledWith( fake_Options[ y ] ) ;

      })
       

}) ;