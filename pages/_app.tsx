import React from 'react';

import '@/styles/globals.css'

import {  useEffect } from 'react' ;

import type { AppProps } from 'next/app'
import { App_Wrapper } from '@/components/layout'

import { ToastContainer } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css' ;


// # React-Query
import { QueryClient , QueryClientProvider } from 'react-query' ;
import { ReactQueryDevtools } from 'react-query/devtools' ;
import { queryClient } from "@react-query/queryClient" ; // 自訂 queryClient

// # Redux
import { Provider } from 'react-redux';
import store from '@/store/store';

// # next-auth
import { SessionProvider  } from "next-auth/react" ;



export default function App({ Component, pageProps } : AppProps) {



  return <Provider store = { store } >


             <SessionProvider session = { pageProps.session } >
             
                 <QueryClientProvider client = { queryClient } >

                      <ToastContainer position        = "bottom-left"
                                      autoClose       = { 5000  }
                                      hideProgressBar = { false }
                                      newestOnTop     = { false }
                                      closeOnClick
                                      rtl             = { false }
                                      pauseOnFocusLoss
                                      draggable
                                      pauseOnHover />

                      <App_Wrapper>

                          <Component { ...pageProps }/>

                      </App_Wrapper>

                 </QueryClientProvider>

             </SessionProvider>

           </Provider>


}
