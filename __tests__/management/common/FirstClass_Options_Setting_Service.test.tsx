
// 使用自訂 render
import { fireEvent , render , screen  } from "@utils/test_tools/test-utils" ; 


import { FirstClass_Options_Setting_Service } from "@service/index" ;


const fake_FirstClass = [ 
    { name : 'a' , id : '1' , service_content : [ {} ] } , 
    { name : 'b' , id : '2' , service_content : [] } , 
] ;

const fake_Convert     = jest.fn( ( x ) => {

                                    const first_Class       = x?.name ;          // 服務名稱
                                    const first_Class_Id    = x?.id ;            // 服務 id
                                    const second_Class_Num  = x?.service_content?.length // 寵物種類x   

                                return { first_Class , first_Class_Id , second_Class_Num  } 

                         }) ;   


const fake_Click_Delete = jest.fn();



// ---------------------



test( "是否依照輸入資料( all_First_Classes )，正確顯示 _ 分類名稱 & 次分類數目" , () => {

   
    
    render( <FirstClass_Options_Setting_Service all_First_Classes   = { fake_FirstClass }
                                                convert_First_Class = { fake_Convert }
                                                click_Delete_First  = { fake_Click_Delete }  /> ) ;

    const options = screen.getAllByRole( 'listitem' ) ;  


    // 顯示資料數 
    expect( options ).toHaveLength( 2 ) ;
   
    // 顯示 _ 第一個分類名稱 ＆ 
    expect( options[0] ).toHaveTextContent( fake_FirstClass[0].name )
    expect( options[0] ).toHaveTextContent( fake_FirstClass[0].service_content.length as any )

    expect( options[1] ).toHaveTextContent( fake_FirstClass[1].name )
    expect( options[1] ).toHaveTextContent( fake_FirstClass[1].service_content.length as any )
   
    expect( options[2] ).toBe( undefined )

}) ;


test( "點選 _ 分類刪除鍵，刪除功能 click_Delete_First 是否會被執行" , () => {


    render( <FirstClass_Options_Setting_Service all_First_Classes   = { fake_FirstClass }
                                                convert_First_Class = { fake_Convert }
                                                click_Delete_First  = { fake_Click_Delete }  /> ) ;

     
    const delete_Btn = screen.getByText( 'x' )

    fireEvent.click( delete_Btn ) ;

    
    expect( fake_Click_Delete  ).toHaveBeenCalled() ;


}) ;