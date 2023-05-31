
import { FC , useState } from 'react' ;
import 'react-datepicker/dist/react-datepicker.css';
import { useFetch_Account_Service_Orders_By_Service_Date } from '@/utils/react-query/hooks/service/useFetchServices';
import { db_Customers_Columns, db_Pets_Columns, db_Service_Order_Columns, db_Services_Columns } from '@/utils/custom_types/form';
import { CSVLink } from "react-csv" ;
import { RiFileExcel2Fill } from "react-icons/ri" ;
import { MdPriceChange } from "react-icons/md" ;
import Query_Date_Type from './Query_Date_Type';



interface Service_Order extends db_Service_Order_Columns {

    customer : db_Customers_Columns ;  // 客戶
    pet      : db_Pets_Columns ;       // 寵物
    service  : db_Services_Columns ;   // 服務項目

}


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


    // 共計金額
    const total_Amount_Paid = data.reduce( ( total , item ) =>  total + item?.amount_paid , 0 ) ;


    return <div className = "min-h-[80vh]">
             
              { /* 導覽列  */ }
              <div className = "flex mt-20 mb-20" >

                 { /* 查詢 _ 日期 /類型  */ }
                  <Query_Date_Type set_Query_Obj = { set_Query_Obj }  />

                  
                 
                  <div className = "w-1/2 flex justify-between px-36" >
 
                    { /* 共計金額  */ } 
                     <p className="flex items-center text-lg px-4 py-2"> 
                         <MdPriceChange  size = { 30 }  />  &nbsp; 共計金額 : <span className="text-red-400"> &nbsp; { total_Amount_Paid }  &nbsp; </span> 元 
                     </p>

                     { /* 匯出 CSV  */ } 
                     <CSVLink data = { data } >
                        <p className="flex items-center px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg cursor-pointer"> 
                            <RiFileExcel2Fill size = { 22 } /> &nbsp; Excel 
                        </p>
                     </CSVLink>

                  </div>
                
              </div> 

              { /* 服務表單 */ }
              <div className="flex justify-center">

                <table className = 'table-auto w-10/12 mt-8 mb-8' >

                    <thead className="border-b-2 text-base h-12">
                        <tr>
                            <th>服務單 id</th>
                            <th>服務類型</th>
                            <th>客戶資料</th>
                            <th>寵物資料</th>
                            <th>服務價格</th>
                            <th>個體調整</th>
                            <th>應收金額</th>
                            <th>實收金額</th>
                            <th>來店日期 </th>
                            <th>付款日期 </th>
                        </tr>
                    </thead>

                    <tbody>

                        {  
                           data?.map( ( x : Service_Order , y : number ) => {

                                const customer = x?.customer ;
                                const pet      = x?.pet ;
                                const service  = x?.service ;

                                return <tr className = "border-b-2 h-12" key = { y } >
                                          <td className = "text-center"> { x?.id } </td>
                                          <td> { service.name } </td>
                                          <td> { customer?.name } <span className = "text-xs text-gray-500" > ( { customer?.mobile_phone } ) </span> </td>
                                          <td> { pet?.name } <span className = "text-xs text-gray-500" >  ( { pet?.pet_class } / { pet?.pet_species } ) </span> </td>
                                          <td className = "text-center" > { x?.service_price } </td>
                                          <td className = "text-center" > { x?.adjust_amount } </td>
                                          <td className = "text-center" > { Number( x?.service_price ) + Number( x?.adjust_amount ) } </td>
                                          <td className = "text-center text-red-400" > { x?.amount_paid }  </td>
                                          <td className = "text-center" > { x?.service_date } </td>
                                          <td className = "text-center" > { x?.payment_date } </td>
                                       </tr> 
                           })
                        }

                    </tbody>

                </table>

              </div>

           </div>

} ;


export default Finance_Management_Service
       