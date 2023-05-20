
import { FC } from 'react' ;
import { Card_Row  } from "@layout/index" ;
import { set_Right_Panel_Component } from '@reducer/reducer_Layout' ;
import { useDispatch } from 'react-redux' ;
import { AppDispatch } from '@/store/store' ;
import { Update_Service_Order_Form }  from "@service/index" ;



type Data_Row = {

   data : any[] ;

}


// 到店各狀態資料列
const Service_Data_Row : FC< Data_Row > = ( { data } ) => {


    const dispatch = useDispatch< AppDispatch >() ;


    // 點選 _ 服務訂單
    const click_Btn = ( data : any ) => dispatch( set_Right_Panel_Component( <Update_Service_Order_Form service = { data } /> ) ) ;


    return <>
     
              {

                    data.map( ( x  , y ) => {

                        const pet      = x?.pet ;  
                        const customer = x?.customer ;

                        return <div key = { y } className = "relative" onClick = { () => click_Btn( x ) } >

                                    <Card_Row >

                                        <div className = "flex" >

                                            <div>

                                                <p className = "mb-1">
                                                    <span className = "text-xl font-bold text-gray-600"> { pet?.name } </span> 
                                                    <span className = "text-md text-gray-400">  ( { pet?.pet_class } / { pet?.pet_species } ) </span>
                                                </p> 

                                                <p className="text-lg">
                                                    { customer?.name } ( { customer?.mobile_phone } )    
                                                </p>

                                            </div>
                                        
                                        </div>
                                    
                                    </Card_Row> 

                                </div>
                            
                    })

                    }
    
    
           </> 

} ;


export default Service_Data_Row
       