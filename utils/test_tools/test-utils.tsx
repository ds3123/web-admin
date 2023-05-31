

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

  # 自訂 renter() --> 全局、統一設定 Provider ( 不用在每個測試檔案中，個別設定 render 方法的 wrapper 參數 )

*/ 
export const AllTheProviders = ({ children } : { children : React.ReactNode }) => (

  
    <Provider store = { store } >    

        <SessionProvider session = { null } >

          <QueryClientProvider client = { queryClient } >

             { children } 
                   
          </QueryClientProvider>

        </SessionProvider>
      
    </Provider>

   

  
) ;


const customRender = (
                      ui       : ReactElement,
                      options? : Omit<RenderOptions, 'wrapper'> ,
                     ) => render( ui , { wrapper : AllTheProviders , ...options } ) ;

export * from '@testing-library/react'
export { customRender as render }