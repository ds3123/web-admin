import { FC } from 'react' ;
import { useRouter } from 'next/router' ;
import { Management_Action_Service } from '@/components/service';



// @ 管理區
const Management_Action : FC = () : JSX.Element => {

   const router     = useRouter() ; 
   const { action } = router.query   ; 
   
   return <Management_Action_Service action = { action } />
  
          
} ;

export default Management_Action
       