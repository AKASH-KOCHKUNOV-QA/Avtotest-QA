describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru')
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('негативный кейс авторизации', function () {
  cy.visit('https://login.qa.studio/');
  cy.get('#mail').type('german@dolnikov.ru')
  cy.get('#pass').type('iLoveqastudio')
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('негативный кейс авторизации2', function () {
  cy.visit('https://login.qa.studio/');
  cy.get('#mail').type('german@dolnikov.r')
  cy.get('#pass').type('iLoveqastudio1')
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })

 it('негативный кейс валидации', function () {
  cy.visit('https://login.qa.studio/');
  cy.get('#mail').type('germandolnikov.ru')
  cy.get('#pass').type('iLoveqastudio1')
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
})

it('приведение к строчным буквам в логине', function () {
  cy.visit('https://login.qa.studio/');
  cy.get('#mail').type('GerMan@Dolnikov.ru')
  cy.get('#pass').type('iLoveqastudio1')
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Авторизация прошла успешно');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
})
