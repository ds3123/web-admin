

import moment from "moment";


// 取得今天西元完整日期( Ex. 2020514 )
export const get_Today = () =>{

    const year  = new Date().getFullYear().toString() ;        // 顯示 2019
    const month = (new Date().getMonth() + 1) as number ;      // 需要加 1 ( 顯示 : 1、2、3….  )
    let   m     = ( month < 10 ) ?  0+String( month ) : month; // 月份若為個位數，加 0
    const day   = new Date().getDate() as number ;             // 顯示 13 、14、15 ....
    const d     = ( day < 10 ) ?  0+String(day) : day ;        // 日期若為個位數，加 0

    return year+m+d;

};




// 取得今天西元完整日期( Ex. 2023-05-09 )
export const get_DashToday = () =>{

    return moment( new Date ).format( 'YYYY-MM-DD' ) ;
    
};