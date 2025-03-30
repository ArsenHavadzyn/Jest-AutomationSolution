describe('SauceDemo UI Tests', () => {
    const BASE_URL = 'https://www.saucedemo.com/';
  
    beforeEach(() => {
      cy.visit(BASE_URL);
    });
  
    it('Успішний вхід у систему', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('Помилка при вході з неправильним паролем', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('wrong_password');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('be.visible');
    });
  
    it('Додавання товару до кошика', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  
    it('Видалення товару з кошика', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  
    it('Перевірка виходу з системи', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('eq', BASE_URL);
    });
  });
  