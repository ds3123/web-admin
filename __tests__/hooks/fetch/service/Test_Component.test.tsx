

import { render , screen }  from "@testing-library/react" ;
import Test_Component from "@service/type/management/setting/service/Test_Component"
import { wrapper } from "@/utils/test_tools/React-Query-Wrapper";
import { act } from 'react-dom/test-utils' ;


/* 

   此測試為練習用

*/



jest.mock( '@/utils/react-query/hooks/service/useFetchServices' , () => {
    
    const useFetch_Account_All_Services = jest.fn();

    useFetch_Account_All_Services.mockReturnValueOnce( {  data : [ '洗澡' , '美容' ] }  )
    useFetch_Account_All_Services.mockReturnValueOnce( {  data : [ '美容' ] }  )
    

    return { useFetch_Account_All_Services }

});


test( "" , async() => {

    await act( () => render( <Test_Component /> , { wrapper }  ) )

    expect( screen.getByText( /服務數 : 2/ ) ).toBeInTheDocument();

    await act( () => render( <Test_Component /> , { wrapper }  ) )

    expect( screen.getByText( /服務數 : 1/ ) ).toBeInTheDocument();

    
}) ; 








