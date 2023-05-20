
import { FC } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout" ;



interface T_Section_Title extends T_Section {

   title_Columns : string[] ;  // 標題欄位
    
} 



// @ 資料列表
const Data_List : FC< T_Section_Title > = ( props ) => {


    const title_Cols = props.title_Columns ; // 標題欄位


    return  <div className="mt-5">
   
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

                   { /* 標題列 */ }
                   <div className = { `my-3 p-2 grid md:grid grid-cols-8 items-center justify-between cursor-pointer text-md` } >

                      { 

                         title_Cols.map( ( col , idx ) => {

                           if( idx === 0 ) return <span key = { idx } className='text-center'> { col } </span>
                           if( idx === 1 ) return <span key = { idx } className = "text-center"> { col } </span>

                           return <span key = { idx } className = "hidden md:grid text-center"> { col } </span>

                         } )
    
                      }  
                    
                   </div>

                   { /* 資料列 */ }
                   { props.children }

                </div>
 
            </div>


} ;

export default Data_List
       