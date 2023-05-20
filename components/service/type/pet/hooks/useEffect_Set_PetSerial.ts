/* eslint-disable react-hooks/exhaustive-deps */
import { useState , useEffect } from 'react' ;

import { v4 as uuidv4 } from 'uuid' ;
import { get_Today } from '@/utils/helper/date';



// 生成 _ 寵物序號
export const useEffect_Set_PetSerial = ( setValue : any )  => {

    
      // 今日
      const today = get_Today() ;

      // 生成 UUID 隨機數
      const uuid4 = uuidv4();
      const uuid4WithoutDashes = uuid4.replace( /-/g , '' ) ;  // 去掉 - 連字符號
      const shortUuid = uuid4WithoutDashes.substring(0, 5 );   // 擷取至 5 位數

      useEffect( () => {
        
        setValue( 'pet_serial' ,  `P_${ shortUuid }_${ today }` , { shouldValidate : true } ) ;
         
      } , [ setValue ] ) ;

    

} ;

