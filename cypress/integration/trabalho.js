/// <reference types = "cypress" />

describe("Trabalho", () =>{
    
    for(let i = 1; i < 6; i++ ){
        //Teste de Cadastro na aplicação 
        it("Verificar a realização de cadastro na aplicação", () =>{
            cy.visit('http://localhost:3000');
            cy.get('[placeholder="Nome"]').type("Cerveja"+i);
            cy.get('[placeholder="Email"]').type("cerveja"+i+"@teste.com.br");
            cy.get('[placeholder="Password"]').type("123456"); 
            
            cy.server();
            cy.route('POST', '**/listar/undefined').as('postUser');
            
            cy.get('[class="button-styles_contentWrapper__XaRtu"]').click();
        
        });
        
        //Teste de listar todos os usuários cadastrados e sair da aplicação
        it("Listar todos os usuários cadastrados e depois sair da aplicação", () =>{ 
            cy.get('[href="/listar"]').click();
            cy.get('[href="/"]').click();

        });
    }

    
});


