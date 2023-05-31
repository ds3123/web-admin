/* eslint-disable react-hooks/exhaustive-deps */

import { FC , useState , useEffect } from 'react' ;
import { Input , Select } from '@layout/index' ;
import { useFormContext } from 'react-hook-form';
import { useForm_Account_Form } from '@/utils/custom_types/form';
import { TwZipCode_Select } from "@layout/index"

import { useFetch_All_Accounts_By_Zipcode } from '@/utils/react-query/hooks/account/useFetchAccounts';


const Account_Form : FC = () => {


    // 取得 _ RHF 的 Context 
    const { control , register , setValue , watch } = useFormContext< useForm_Account_Form >() ;


    // 郵遞區號相關
    const [ zipcode_Info , set_Zipcode_Info ] = useState< Zipcode_Info >({
    
         zipcode  : "" ,  // 郵遞區號
         city     : "" ,  // 縣市
         district : ""    // 行政區

    }) ;


    // 特定郵遞區號下，所有的帳號
    const { data : zipcode_Accounts } = useFetch_All_Accounts_By_Zipcode( zipcode_Info[ "zipcode" ] ) ;



    useEffect( () => {
    

      const shop_Serial = ( zipcode_Accounts.length + 1 ).toString() ;

       setValue( "account_county"   , zipcode_Info["city"] ) ;     // 縣市
       setValue( "account_district" , zipcode_Info["district"] ) ; // 行政區  
       setValue( "account_zipcode"  , zipcode_Info["zipcode"] ) ;  // 郵遞區號

       setValue( "account_serial" , shop_Serial ) ;                // 店家 _ 區域編號
       
    } , [ zipcode_Info , zipcode_Accounts ] ) ;



    return <>

              { /* 隱藏欄位 */ }
              <input type = "hidden" { ...register( "account_county" ) } />   { /* 縣市  */ }
              <input type = "hidden" { ...register( "account_district" ) } /> { /* 行政區  */ }
              <input type = "hidden" { ...register( "account_zipcode" ) } />  { /* 郵遞區號  */ }
              <input type = "hidden" { ...register( "account_serial" ) } />   { /* 店家 _ 區域編號  */ }

              { /* 縣市、行政區 */ } 
              <TwZipCode_Select set_Zipcode_Info = { set_Zipcode_Info }  />

              <div className = "mt-5 relative" >
                    
                <label className = "text-base" > 郵遞區號 : </label> 
                    
                <div className = "flex items-center mt-[4px] h-12 p-3 md:shadow-sm " >

                   <span className = " text-lg text-red-600">  { zipcode_Info["zipcode"] } </span> &nbsp;
                   ( 已建立帳號數 : &nbsp; <span className = "text-blue-600" > { zipcode_Accounts.length } </span> &nbsp;  )

                </div>
                    
              </div> 

              <Select control = { control } label = '品 牌' name = 'account_shop_brand' select_options = { [ '單一店家' , '狗狗公園' ] }  default_value = '單一店家' required = { false } />

              <div className="md:col-span-2">
                  <Input type = "text" control = { control } label = '店 名' name = "account_shop_name" required = { true } />
              </div>

              <Input type = "text" control = { control } label = '負責人' name = "account_shop_owner" required = { true } />

           </>

} ;


export default Account_Form
       