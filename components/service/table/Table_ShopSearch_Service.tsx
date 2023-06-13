/* eslint-disable react-hooks/exhaustive-deps */
import { FC , useEffect } from 'react' ;
import { BsSearch } from "react-icons/bs" ;



type Search = {
   
    set_Search          : ( search : string ) => void ; // 設定 _ 搜尋關鍵字
    handle_Click_Search : () => void ;  // 點選 _ 搜尋

}


// @ 資料列表上，搜尋輸入框
const Table_ShopSearch_Service : FC< Search > = ( { set_Search , handle_Click_Search } ) => {


    return <div className="flex w-1/4 ml-10 p-2 bg-gray-100 text-gray-600 rounded-full focus-within:shadow-md">

                { /* 輸入框 */ } 
                <input type="text" onChange = { e => set_Search( e.target.value ) } placeholder = "請輸入搜尋關鍵字" className="flex-grow px-5 text-base bg-transparent outline-none" />

                { /* 提交鈕 */ } 
                <div onClick = { () => handle_Click_Search() }  className = "ml-5 bg-gray-500 hover:bg-black p-2 rounded-full text-white cursor-pointer">
                     <BsSearch size = { 17 }/>
                </div>

           </div>      


} ;


export default Table_ShopSearch_Service
       