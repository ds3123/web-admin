
import { FC , useState , useEffect } from 'react' ;


// React Date Range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range" ;


// # 住宿表單
const Lodge_Form : FC = () => {



    const [ searchInput , set_SearchInput ] = useState( "" ) ;
    const [ startDate , set_StartDate ]     = useState( new Date ) ;
    const [ endDate , set_EndDate ]         = useState( new Date ) ;
    const [ noOfGuests , set_NoOfGuests ]   = useState( 1 ) ;
    
    const selectionRange = { 
                             startDate : startDate ,
                             endDate   : endDate ,
                             key       : "Selection"
                           } ;


    

    // 日曆 _ 選擇日期                       
    const handleSelect = ( ranges : any ) => {
    
        set_StartDate(  ranges.Selection.startDate ) ;
        set_EndDate(  ranges.Selection.endDate ) ;
      
      } ;                       




    return <>

<div className="flex flex-col col-span-3 mx-auto">

                                      <DateRangePicker ranges       = {[ selectionRange ]}  
                                                        minDate     = { new Date }
                                                        rangeColors = { [ "#FD5B61" ] }
                                                        onChange    = { handleSelect } />

                                      <div className = "flex items-center border-b mb-4">

                                           <h2 className = "text-2xl flex-grow font-semibold">
                                              Number of Guests 
                                           </h2>

                                           {/* <UserIcon className = "h-5"/> */}

                                           <input type      = "number" 
                                                  className = "w-12 p-2 text-lg outline-none text-red-400"
                                                  value     = { noOfGuests } 
                                                  min       = { 1 }
                                                  onChange  = { e => set_NoOfGuests( parseInt( e.target.value) ) }
                                           />

                                       </div>

                                       <div className="flex">
                                          <button onClick = { () => set_SearchInput("") } className="flex-grow text-gray-500"> 取消 </button>
                                          <button className="flex-grow text-red-400" > 搜尋 </button>
                                      </div>

                                 </div> 


    
    
           </>

} ;


export default Lodge_Form
       