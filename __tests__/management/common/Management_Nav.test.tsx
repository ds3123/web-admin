
import { render , screen }  from "@testing-library/react" ;
import { Management_Nav } from "@/components/layout";


jest.mock( "next/router" , () => ( {

   useRouter : jest.fn().mockReturnValue( { query : { action : "setting" }  } )

}) )


// 清除 mock
afterAll( ()=> {

    jest.clearAllMocks();

} )


test( "各個分類選項存在，並有相對應的 href 屬性" , () => {

    const { getByText } = render( <Management_Nav /> ) ;

    // 正確顯示 _ 功能選項 
    const setting  = getByText('分類價格') ;
   
    // const product  = getByText('商品設定') ;
    const account  = getByText('帳號設定') ;
    const employee = getByText('員工設定') ;
    const finance  = getByText('財務報表') ;

    // 功能選項有相對應 href 連結
    expect( setting.closest('a')).toHaveAttribute('href', '/management/setting') ;
    // expect( product.closest('a')).toHaveAttribute('href', '/management/product') ;
    expect( account.closest('a')).toHaveAttribute('href', '/management/account') ;
    expect( employee.closest('a')).toHaveAttribute('href', '/management/employee') ;
    expect( finance.closest('a')).toHaveAttribute('href', '/management/finance') ;
    
}) ;