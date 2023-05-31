

/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="../../support" /> 



describe( "管理區 > 分類設定" , () => { 




  // 取得 _ 登入者帳號密碼
  const user = Cypress.env( "user" ) ;


  it( "" , async() => {

      const newService = '記帳' ;

      
      // 登入頁面
      cy.login( user )  ;

      // 前往管理區
      cy.get('[href="/management/setting"] > .bg-gray-100').click() ;

      
      cy.get('#management_service_first_class').type( `${ newService  }{enter}` )


      cy.get('.max-w-7xl > :nth-child(1) > .px-8').contains( newService ) ;


   
   
   }) ;
   

}) ;





