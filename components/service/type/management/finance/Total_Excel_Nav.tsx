
import { FC } from 'react' ;
import { CSVLink } from "react-csv" ;
import { MdPriceChange } from "react-icons/md" ;
import { RiFileExcel2Fill } from "react-icons/ri" ;



type Total_Excel = {

    data  : any[] ;

}


// 共計金額 ( 加總 _ 實收金額 ) / 匯出 CSV
const Total_Excel_Nav : FC< Total_Excel > = ( { data } ) => {


    // 共計金額
    const total_Amount_Paid = data.reduce( ( total , item ) =>  total + item?.amount_paid , 0 ) ;


    return <div data-testid = "Total_Excel_Nav" className = "w-1/2 flex justify-between px-36" >
 
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

} ;

export default Total_Excel_Nav
       