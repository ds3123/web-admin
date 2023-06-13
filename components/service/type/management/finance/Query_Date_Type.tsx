/* eslint-disable react-hooks/exhaustive-deps */


import { FC , useState , useEffect } from 'react' ;
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Query_Obj } from './Finance_Management_Service';

type Set_Query = {

   set_Query_Obj : ( obj : Query_Obj ) => void 

}



// # 查詢 _ 類型 / 日期
const Query_Date_Type : FC< Set_Query > = ( { set_Query_Obj } ) => {


    const today = new Date();

    // 查詢日期
    const [ query_Date , set_Query_Date ] = useState( moment( today ).format( "YYYY-MM-DD" ) ) ;


    // 查詢類型
    const [ query_Type , set_Query_Type ] = useState< "到店日期" | "付款日期" >( "到店日期" ) ;


    // 變更 _ 查詢日期
    const chnage_Query_Date = ( date : any ) => {

        const _date = moment( date ).format( "YYYY-MM-DD" ) ;

        set_Query_Date( _date ) ;

    } ;



    useEffect( () => {
      

       set_Query_Obj( { query_Date : query_Date , query_Type : query_Type } ) ;

       
    } , [ query_Date , query_Type ] ) ;

    
    return <div data-testid = "Query_Date_Type" className = "flex w-1/2 px-10" >

                <p onClick = { () => set_Query_Type( "到店日期" ) } className = { `${ query_Type === "到店日期" ? "bg-black text-white" : "bg-gray-200" } w-2/6 h-12 flex justify-center items-center rounded-full mr-5 tracking-widest cursor-pointer` }> 到店日期 </p>
                <p onClick = { () => set_Query_Type( "付款日期" ) } className = { `${ query_Type === "付款日期" ? "bg-black text-white" : "bg-gray-200" } w-2/6 h-12 flex justify-center items-center rounded-full mr-10 tracking-widest cursor-pointer` } > 付款日期 </p>

                <DatePicker selected  = { new Date( query_Date ) || today }    // 預設顯示今日
                            onChange  = { ( date ) => chnage_Query_Date( date ) }
                            className = "px-4 py-2 h-12 border-2 rounded-lg text-base" />

           </div>

} ;


export default Query_Date_Type
       