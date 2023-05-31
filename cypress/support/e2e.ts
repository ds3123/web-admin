// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:

/*

   ＃ 可在此檔案中，import 各個自訂 command 的檔案內容
   
      --> 一旦匯入，全域、在整個專案中，都可用 cy 物件，讀取 _ 以下匯入的檔案指令 

      參考 : https://www.youtube.com/watch?v=Olh-rmr3pOw

*/


import './commands'
import './visit_commands'

// imoprt './other_commands' // 其他 command
