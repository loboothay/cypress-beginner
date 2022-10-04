/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html');
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo@gmail.com');
        cy.get('#open-text-area').type('Teste basico cypress');
        cy.get('button[type="submit"]').click();
        cy.get('.success').should('be.visible');
    })

    //exercicio 1 aula 2
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo@gmail.com');
        cy.get('#open-text-area').type(longText, { delay: 0 });
        cy.get('button[type="submit"]').click();
        cy.get('.success').should('be.visible');
    })

    //exercicio 2 aula 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo,gmail.com');
        cy.get('#open-text-area').type('Teste do exercício 2');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    //exercicio 3 aula 2
    it('Campo telefone continua vazio após preencher com dados não-numéricoss', function () {
        cy.get('#phone')
            .type('abc').should('have.value', '');
    })

    //exercicio 4 aula 2
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo@gmail.com');
        cy.get('#phone-checkbox').click();
        cy.get('#open-text-area').type('Teste do exercício 4');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    //exercicio 5 aula 2
    it('Verifica se todos os campos são preenchidos e depois de mandar limpar, se estão vazios', function () {
        cy.get('#firstName').type('Thaynara')
            .should('have.value', 'Thaynara')
            .clear()
            .should('have.value', '');
        cy.get('#lastName').type('Amaral')
            .should('have.value', 'Amaral')
            .clear()
            .should('have.value', '');
        cy.get('#email').type('thayamarallobo@gmail.com')
            .should('have.value', 'thayamarallobo@gmail.com')
            .clear()
            .should('have.value', '');
        cy.get('#phone').type('1234567890')
            .should('have.value', '1234567890')
            .clear()
            .should('have.value', '');
    })

    //exercício 6 aula 2
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    //exercicio 7 aula 2
    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit();
        cy.get('.success').should('be.visible');
    })

    //exercicio 8 aula 2
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo@gmail.com');
        cy.get('#open-text-area').type(longText, { delay: 0 });
        cy.contains('button', 'Enviar').click();
        cy.get('.success').should('be.visible');
    })

    //exercício 1 aula 3
    it('seleciona um produto (YouTube) por seu texto', function () {
        cy.get('#product').select('YouTube')
            .should('have.value', 'youtube');
    })

    //exercício 2 aula 3
    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product').select('mentoria')
            .should('have.value', 'mentoria');
    })

    //exercício 3 aula 3
    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('#product').select(1)
            .should('have.value', 'blog');
    })

    //exercício 1 aula 4
    it('marca o tipo de atendimento "Feedback"', function () {
        cy.get('input[type="radio"][value="feedback"]').check()
            .should('have.value', 'feedback');
    })

    //exercicio 2 aula 4
    it('marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked');
            })
    })

    //exercicio 1 aula 5
    it('marca ambos checkboxes, depois desmarca o último', function () {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked');
    })

    //exercicio 2 aula 5
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Thaynara');
        cy.get('#lastName').type('Amaral');
        cy.get('#email').type('thayamarallobo@gmail.com');
        cy.get('#phone-checkbox').check();
        cy.get('#open-text-area').type('Teste do exercício 4');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    //exercicio 1 aula 6
    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json');
        });
    })

    //exercicio 2 aula 6
    it('seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json');
        });
    })

    //exercicio 3 aula 6
    it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
        cy.fixture('example.json').as('sampleFile');
        cy.get('input[type="file"]#file-upload')
        .selectFile('@sampleFile')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json');
        });
    })
})