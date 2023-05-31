
import { FC } from 'react' ;
import { RiDeleteBin6Fill } from "react-icons/ri"


type Delete = {

   delete_Func : ( id : string ) => void ;  // 刪除函式 
   data_Id     : string ;                   // 資料 id 

}


// ＠ 刪除資料按鈕
const Delete_Button : FC< Delete > = ( { delete_Func , data_Id } ) => {


    return <div className = "flex items-center absolute shadow-md z-20 top-12 right-20 px-3 py-2 rounded-lg text-base text-white bg-red-300 hover:bg-red-500 cursor-pointer" 
                  onClick = { () => { if( window.confirm( "確認要刪除此筆資料？" ) ) delete_Func( data_Id ) } }> 

                  <RiDeleteBin6Fill size = { 20 } /> &nbsp;

                  <p> 刪除 </p>

           </div>


} ;

export default Delete_Button
       