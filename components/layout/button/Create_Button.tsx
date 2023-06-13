
import { FC } from 'react' ;
import { MdOutlineAddCircle } from "react-icons/md" ;


type Button = {

  buttonType : string ;    // 新增類型
  onClick    : () => void  // 點選 _ 事件處理

}

// 新增按鈕
const Create_Button : FC< Button > = ( { onClick , buttonType } ) => {


    return <button data-testid = "Create_Button" className = "flex absolute right-10 items-center px-4 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg cursor-pointer" 
                   onClick   = { () => onClick() } >

              <MdOutlineAddCircle size = { 23 } className = "mr-2" />
              <span className = "font-bold text-md md:text-base"> 新增{ buttonType } </span>

           </button>

} ;

export default Create_Button
       