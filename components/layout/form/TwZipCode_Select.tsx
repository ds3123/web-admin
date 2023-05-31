/* eslint-disable react-hooks/exhaustive-deps */


import { FC , useState , useEffect } from 'react' ;

import { useTwZipCode , cities , districts } from "use-tw-zipcode";


type ZipCode = {

  set_Zipcode_Info : ( info : any ) => void
 
}



// # 郵遞區號
const TwZipCode_Select : FC< ZipCode > = ( { set_Zipcode_Info } ) => {


    const {

        city ,                // 縣市
        district ,            // 行政區 
        zipCode ,             // 郵遞區號

        handleCityChange ,    // 變動處理 : 縣市
        handleDistrictChange  // 變動處理 : 行政區 

       } = useTwZipCode() ;



    // 取得 / 回傳 : 縣市、行政區、郵遞區號
    useEffect( () => {
      
        set_Zipcode_Info({
  
                            zipcode  : zipCode ,
                            city     : city ,
                            district : district 
      
                          }) ;
  
      } , [ zipCode , city , district ] ) ;
  


    return <>

            { /* 縣市 */ } 
            <div className = "mt-5 relative">

                <label htmlFor = "account_county" className = "text-base" > 縣 市 : </label> 

                <div className = "flex items-center mt-[4px] h-12 border rounded-lg p-3 md:shadow-sm text-blue-900" >

                    <select onChange={ e => handleCityChange( e.target.value )} id = "account_county" className = "flex-grow outline-none text-base">

                        { cities.map( ( x , y ) => <option key = { y } value = { x } > { x } </option> ) }
                    
                    </select> 

                </div>

            </div>

            { /* 郵遞區號 */ } 
            <div className = "mt-5 relative">

                <label htmlFor = "account_district" className = "text-base" > 行政區 : </label> 

                <div className = "flex items-center mt-[4px] h-12 border rounded-lg p-3 md:shadow-sm text-blue-900" >

                    <select onChange={ e => handleDistrictChange( e.target.value )} id = "account_district"  className = "flex-grow outline-none text-base">

                        { districts[ city ].map( ( x , y ) => <option key = { y } value = { x } > { x } </option> ) }
                    
                    </select> 

                </div>

            </div>



    
           </>

} ;

export default TwZipCode_Select
       