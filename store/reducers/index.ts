

import { combineReducers } from '@reduxjs/toolkit';
import reducer_Layout from './reducer_Layout';
import reducer_Management_Class from './reducer_Management_Class';
import reducer_Pagination from './reducer_Pagination';

const rootReducer = combineReducers({

   pagination       : reducer_Pagination ,      // 頁碼
   layout           : reducer_Layout ,          // 版面配置

   // # 管理區
   management_class : reducer_Management_Class  // 分類


}) ;

export default rootReducer;