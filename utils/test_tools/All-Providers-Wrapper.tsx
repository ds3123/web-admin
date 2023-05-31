
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'


// # 所需 Provider

// * Redux
import { Provider } from 'react-redux';
import store from '@/store/store';

// * next-auth
import { SessionProvider  } from "next-auth/react" ;

// * React-Query
import {  QueryClientProvider } from 'react-query' ;
import { queryClient } from "@react-query/queryClient" ; // 自訂 queryClient


/*

   所有 Provider

*/


export const all_Providers_Wrapper = ( { children } : any ) => {

    return  <Provider store = { store } >    

                <SessionProvider session = { null } >

                    <QueryClientProvider client = { queryClient } >

                        { children } 
                            
                    </QueryClientProvider>

                </SessionProvider>
            
            </Provider>



   
}


