
import { FC } from 'react' ;
import { useSession } from 'next-auth/react'; 
 


type Info = {

    total_data_sum : number ; // 資料筆數

}


// @ 資料列表上，店家訊息 / 資料筆數
const Table_ShopInfo_Service : FC< Info > = ( { total_data_sum } ) => {


    const { data : session } = useSession() as any ;

    // 店家資訊
    const shopInfo = session?.userInfo?.shop_account ;
 

    return   <div className = "relative top-3" >

                <p className="text-lg text-gray-500"> 
                    資料筆數 :<span className="text-blue-600 p-2 font-semibold">{ total_data_sum } </span>  
                </p>

             </div>



} ;


export default Table_ShopInfo_Service
       