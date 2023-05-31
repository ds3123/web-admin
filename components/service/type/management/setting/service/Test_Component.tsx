

import { useFetch_Account_All_Services } from "@/utils/react-query/hooks/service/useFetchServices";


// # 測試練習用 2023.05.27
const Test_Component = () => {

    
    const { data } = useFetch_Account_All_Services() ;


    return <div>

                <p> 服務數 : { data.length } </p> 

           </div>


} ;


export default Test_Component
       