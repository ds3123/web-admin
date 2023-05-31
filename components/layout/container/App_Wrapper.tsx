/* eslint-disable react-hooks/exhaustive-deps */
import { FC , useEffect , useState  } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout";
import { useRouter } from 'next/router' ;
import { Toggle_Panel_Right , Left_SideBar } from "@layout/index" ;
import { useSession , getSession } from "next-auth/react" ;



const App_Wrapper : FC< T_Section > = ( props ) => {


    // Next-Auth
    const { data : session } = useSession() ;
    const router             = useRouter();



    // 利用 getSession() 檢查是否為登入成功有 session 狀態 ( NOTE:用 useSeesion() 一開始會有 undefined )
    const checkSession = async () => {

        const session = await getSession() ;

        if( !session ) router.push('/');
        
    } ;

    
    // # 若沒有 session ，退回到登入頁面
    useEffect( () => {
        
       checkSession();
     
    } , [ ] ) ;


    return <div className = "flex" > 

                { /*  左側 _ 選項  */ }
                { session && <Left_SideBar /> }

                { /*  右側 _ 滑動面板  */ }
                { session && <Toggle_Panel_Right /> }


                { /* 右側 _ 選項內容 */ } 
                <main className = "md:ml-16 w-full" > 

                    { props.children } 
                    
                </main>
         
           </div>

} ;

export default App_Wrapper
       