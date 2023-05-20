

import { combineReducers } from '@reduxjs/toolkit';
import reducer_Layout from './reducer_Layout';

const rootReducer = combineReducers({

   
   layout  : reducer_Layout ,   // 版面配置

}) ;

export default rootReducer;