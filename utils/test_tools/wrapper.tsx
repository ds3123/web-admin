
// # Redux
import { Provider } from 'react-redux';
import store from '@/store/store';

// # next-auth
import { SessionProvider  } from "next-auth/react" ;

// # React-Query
import {  QueryClientProvider } from 'react-query' ;
import { queryClient } from "@react-query/queryClient" ; // 自訂 queryClient


// # for render() 方法，接收由以下 Provider 等包覆的元件
export const test_Wrapper = ( component : JSX.Element ) => (

    <Provider store = { store } >

      <SessionProvider session = { null } >

         <QueryClientProvider client = { queryClient } >

            { component }

         </QueryClientProvider>

      </SessionProvider>

    </Provider>
    
);
  

