
/*
*
* 實體化 axios 模組 --> 作為使用 axios 時，重複的配置
*
*/


import _axios from 'axios' ;



const axios = ( baseURL ) => {


    const instance = _axios.create({

        withCredentials : true , // 確保發出請求時，也夾帶 Cookie ( 例如 jwt_token 其中包含 JWT，供後端驗證 )

    
        baseURL : baseURL || 'http://localhost:8000' ,   // 本機開發 ( for Mac )

        // baseURL : baseURL || 'https://pet.cchouse.com.tw/backend/public/index.php/api' ,              // pet_cchouse_2023 ( backend 資料夾 )        

        timeout : 60000  // ( 原先為 1000 ms --> 設長點，避免資料過多情況下，來不及取得，即拋出 timeout 錯誤 : Error: timeout of 1000ms exceeded )

    }) ;

    return instance ;

} ;


// 不同狀況回傳 :
export { axios };         // 有參數 --> 使用
export default axios();   // 無參數 --> 預設直接