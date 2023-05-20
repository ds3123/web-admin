
import { FC } from 'react' ;
import { FaSpinner } from 'react-icons/fa' ;
import { MdError } from 'react-icons/md';
import { BsSearch } from "react-icons/bs" ;



type Sign = {

    isFetching     : boolean ; // 是否正在取得資料
    search         : string ;  // 搜尋關鍵字
    total_data_sum : number ;  // 資料總筆數

}


// @ 資料列表上，各種資料狀態說明 : 下載中、未搜尋到資料、目前尚未新增資料
const Table_DataSign_Service : FC< Sign > = ( { isFetching , search , total_data_sum } ) => {


    return <>
    
                { /* 下載中 icon */ } 
                 { isFetching &&  <FaSpinner className = "animate-spin text-gray-500" size = { 32 }  />  }


                 { ( !search && total_data_sum === 0 ) && 
                      <p className = "flex items-center bg-red-500 px-5 py-3 text-white text-xl rounded-full">
                          <MdError size = { 30 } className = "mr-2" /> 目前尚未新增資料，請點選右上角按鈕，新增資料
                      </p>

                 }
 
                 { 
                   ( search && total_data_sum === 0 ) && 
                      <p className = "flex items-center bg-red-500 px-5 py-3 text-white text-xl rounded-full">
                         <BsSearch size = { 20 } className = "mr-3" /> 關鍵字 : [ { search } ]，查無資料，請改用其他搜尋關鍵字
                      </p>
                 }


           </>

} ;


export default Table_DataSign_Service
       