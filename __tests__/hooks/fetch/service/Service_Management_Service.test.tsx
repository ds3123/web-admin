
// 使用自訂 render
import { fireEvent , render , screen , waitFor } from "@utils/test_tools/test-utils" ; 
import userEvent from "@testing-library/user-event" ;
import { act } from 'react-dom/test-utils' ;





describe( "" , () => { 

   // useEvent 物件
   const user = userEvent.setup() ;


   beforeEach( async() => {

    


     // 渲染執行元件
     // await act( async() => render( <Service_Management_Service /> ) ) ;


   } ) 

   

  


   // 尚未完成 2023.05.22
   test( "" , async() => {


    //    const options = await screen.findAllByRole( 'listitem' ) ;  

    //    // 顯示資料數 
    //    expect( options ).toHaveLength( 3 ) ;

    //    const input  = screen.getByLabelText( "請輸入 _ 第一層分類 :" ) as any ;   // 第 1 層輸入框
    //    const submit = screen.getAllByRole( "button" , { name : "提交新增" } ) ;  // 有 2 個提交鈕
    

   }) ; 


   test.todo( "第一層分類中，點選第 1 個標籤，第二層分類中，有 0 個分類標籤" )
   test.todo( "第一層分類中，點選第 2 個標籤，第二層分類中，有 4 個分類標籤" )


}) ;


