
import { FC , useState } from 'react' ;
import 'react-datepicker/dist/react-datepicker.css';
import { useFetch_Account_Service_Orders_By_Service_Date } from '@/utils/react-query/hooks/service/useFetchServices';
import Query_Date_Type from './Query_Date_Type';
import Total_Excel_Nav from './Total_Excel_Nav';
import Finance_List_Table from './Finance_List_Table';



export type Query_Obj = {

   query_Type : string ;
   query_Date : string ;

}


// # 管理區 > 財務報表
const Finance_Management_Service : FC = () => {


    // 設定 _ 查詢日期類型
    const [ query_Obj , set_Query_Obj ] = useState< Query_Obj >( { query_Type : "到店日期" , query_Date : "" } ) ;


    // 取得 _ 查詢日期資料 ( 依照 : 到店日期 )
    const { data } = useFetch_Account_Service_Orders_By_Service_Date( query_Obj.query_Date );

    
    return <div data-testid = "Finance_Management_Service" >
             
              { /* 導覽列  */ }
              <div className = "flex mt-20 mb-20" >

                 { /* 查詢 _ 日期 /類型  */ }
                 <Query_Date_Type set_Query_Obj = { set_Query_Obj }  />

                 { /* 共計金額 ( 加總 _ 實收金額 ) / 匯出 CSV */ }
                 <Total_Excel_Nav data = { data } />
                
              </div> 

              { /* 表單 */ }
              <div className="flex justify-center">

                 <Finance_List_Table data = { data } />

              </div>

           </div>

} ;


export default Finance_Management_Service
       