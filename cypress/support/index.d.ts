// 匯出全部內容
export {}

declare global {

    namespace Cypress {

      // 定義 _ 自訂 command 型別 ( for TypeScript )   
      interface Chainable {

        // 登入系統         
        login( obj : any ) : Chainable<JQuery<HTMLElement>>
      
      }

    }
}