


/*

    # 自訂方法 : 

*/



// * 登入系統
Cypress.Commands.add( 'login' , ( user : { account : string , password : string } ) => {
    
  cy.visit( "/" ) ;  

  // 輸入 _ 帳號密碼
  cy.get( '.mb-7 > .shadow' ).should( "contain" , "").type( user.account )
  cy.get( '.mb-10 > .shadow' ).type( user.password )

  // 提機
  cy.get( '.bg-white > .flex > .w-full' ).click()


})