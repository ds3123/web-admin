import { useState , useEffect } from 'react' ;
import { Bar } from 'react-chartjs-2' ;
import { Chart as ChartJS ,
         CategoryScale ,
         LinearScale ,
         BarElement ,
         Title ,
         Tooltip ,
         Legend
       } from "chart.js" ; 


ChartJS.register(
                  CategoryScale ,
                  LinearScale ,
                  BarElement ,
                  Title ,
                  Tooltip ,
                  Legend
                ) ;   
 


const Bar_Chart = () => {

    const [ chart_Data , set_Chart_Data ]       = useState< any >( { datasets : [] } ) ;
    const [ chart_Options , set_Chart_Options ] = useState( {} ) ;

    useEffect( () => {
      
        set_Chart_Data({
                   labels : [ 'Mon' , 'Tues' , 'Wed' , 'Thur' , 'Fri' , 'Sat' , 'Sun' ] ,
                   datasets : [
                       {
                          label : 'Scale $' ,
                          data : [ 18127 , 22201 , 19480 ,17932 , 21424, 22243 , 14344 ] ,
                          borderColor : 'rgb(53,162,235)' ,
                          backgroundColor : 'rgba(52,162,235,0.4)'
                       }

                   ]  


        }) ;

        set_Chart_Options( {
  
               plugins : {
                           legend : { 
                                      position : 'top'
                                    } ,
                            title : {
                                      display : true ,
                                      text : 'Daily Revenue'
                            } ,
                            maintainAspectRatio : false ,
                            responsive : true
                         }
                             


        } )


       
    } , [] ) ;

    return <>

              <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white"> 
              
                 <Bar data = { chart_Data } options = { chart_Options } /> 
              
              </div>



           </>

} ;

export default Bar_Chart
       