

import { renderHook , act, waitFor } from '@testing-library/react' ;
import { useFetch_Account_All_Services , useFetch_Service_By_Id } from "@/utils/react-query/hooks/service/useFetchServices";
import { wrapper } from '@/utils/test_tools/React-Query-Wrapper' ;


test( "測試 _ 服務項目 : 數量、結構" , async() => {


    const { result } = renderHook( () => useFetch_Account_All_Services() , { wrapper } )  ;

    await waitFor( () => {

        const service_Data = result.current.data ;     

        expect( service_Data ).toHaveLength( 3 ) ;  
        expect( service_Data[0] ).toEqual( { "id" : 1 , "account_id" : "1" , "name" : "洗澡" } ) ;  

    })

    
}) ;
