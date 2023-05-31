
import { renderHook } from '@testing-library/react' ;
import { act } from 'react-dom/test-utils' ;
import {  useEffect_Service_FirstClass_Data , useEffect_Service_SecodeClass_Data  } from "@service/type/management/setting/service/useEffect_ServiceClass_Data"
import { wrapper } from "@utils/test_tools/React-Query-Wrapper"
import {  all_Providers_Wrapper } from "@utils/test_tools/All-Providers-Wrapper" 



test( "useEffect_Service_FirstClass_Data 所回傳物件，有包含預期屬性 : 數量、名稱" , async() => {


    // 期望 _ 取得屬性名稱
    const expectedKeys = [ 'all_Services' , 'methods_first' , 'onSubmit_first' , 'click_Delete_First_Class' , 'convert_First_Class' ] ;


    // 執行 Hook  
    const { result } = await act( () => renderHook( () => useEffect_Service_FirstClass_Data() , { wrapper } ) );

    // 實際 _ 取得屬性名稱
    const actualKeys = Object.keys( result.current ) ; 
 
    // ---

    // 屬性數量 _ 是否一致
    expect( actualKeys.length ).toBe( expectedKeys.length) ;


    // 屬令名稱 _ 是否一致
    expectedKeys.forEach( key => {

        expect( actualKeys ).toContain( key );

    } ) 


}) ;



test( "useEffect_Service_SecodeClass_Data 所回傳物件，有包含預期屬性 : 數量、名稱" , async() => {


    // 期望 _ 取得屬性名稱
    const expectedKeys = [ 'second_Classes' , 'methods_second' , 'onSubmit_second' , 'click_Delete_Second_Class' , 'convert_Second_Class' ] ;


    // 執行 Hook  
    const { result } = await act( () => renderHook( () => useEffect_Service_SecodeClass_Data() , {  wrapper : all_Providers_Wrapper } ) );

    // 實際 _ 取得屬性名稱
    const actualKeys = Object.keys( result.current ) ; 


    // 屬性數量 _ 是否一致
    expect( actualKeys.length ).toBe( expectedKeys.length) ;


    // 屬令名稱 _ 是否一致
    expectedKeys.forEach( key => {

        expect( actualKeys ).toContain( key );

    } ) 


    

}) ;





