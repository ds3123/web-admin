import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // 預設路徑
    baseUrl : 'http://localhost:3000' ,

    // 環境變數
    env     : {  
                  // 登入者：帳號 / 密碼
                  user : {
                           account  : 'ds' ,
                           password : '123' ,
                         }
                 
              } ,

    //  顯示寬高
    viewportHeight : 900 ,
    viewportWidth  : 1600 ,

    // defaultCommandTimeout : 30000 ,  
    // watchForFileChanges : false    // 監看程式變更



  },
});
