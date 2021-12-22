import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");

var base_url = "http://localhost:3000/";

async function criarUsuario(cpf, nome, senha, senhaConfirmacao, email) {
    await $("input[name='nomeCliente']").sendKeys(<string> nome);
    await $("input[name='cpfCliente']").sendKeys(<string> cpf);
    await $("input[name='senhaCliente']").sendKeys(<string> senha);
    await $("input[name='senhaConfirmacaoCliente']").sendKeys(<string> senhaConfirmacao);
    await $("input[name='emailCliente']").sendKeys(<string> email);
    await element(by.buttonText('Cadastrar')).click();
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na pagina com titulo "([^\"]*)"$/, async (tituloPagina) => {
        await browser.get("http://localhost:4200/cadastro-cliente");
        await expect(browser.getTitle()).to.eventually.equal(tituloPagina);
    });

    When(/^eu cadastro com CPF "(\d*)" Nome "([^\"]*)" Senha "([^\"]*)" Senha confirmacao "([^\"]*)" Email "([^\"]*)"$/, async (cpf, nome, senha, senhaConfirmacao, email) => {
        await criarUsuario(cpf, nome, senha, senhaConfirmacao, email);
    });

    Then(/^sou redirecionado para a pagina "([^\"]*)"$/, async (tituloPagina) => {
        await expect(browser.getTitle()).to.eventually.equal(tituloPagina);
    });
})