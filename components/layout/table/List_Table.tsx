import { FC } from 'react' ;
import { T_Table_Head_Columns } from '@/utils/custom_types/string';
import { Table_Head_Columns } from "@/components/service/common/config/table_Config"
import { T_Section } from '@/utils/custom_types/layout';



interface L_Table extends T_Section  {

  type : keyof T_Table_Head_Columns  // 表單類型
 
}


// # 一般清單表格
const List_Table : FC< L_Table > = ( { type , children }  ) => {


    return  <table className = "table-auto w-10/12 mt-8 mb-8" >

              <thead className = "border-b-2 text-base h-12" >

                <tr>{ Table_Head_Columns[ type ]?.map( ( title , index ) => <th key = { index } className = "px-5 py-3"> { title } </th> ) }</tr>   
            
              </thead>

              <tbody>

                { children }

              </tbody>

           </table>
           

} ;


export default List_Table
       