import { FC } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout" ;


// @ 各頁面背景樣式
const Page : FC< T_Section > = ( props ) => {


    return <div className="bg-gray-100 min-h-screen ">

             { props.children }

           </div>

} ;

export default Page
       