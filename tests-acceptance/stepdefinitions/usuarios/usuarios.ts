let { Given, When, Then } = require("cucumber");
let { browser, $, element, ElementArrayFinder, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let request = require("request-promise");

var base_url = "http://localhost:3000/";

async function criarUsuario(cpf, nome, senha, senhaConfirmacao, email) {
    await $("input[name='nomeCliente']").sendKeys(nome);
    await $("input[name='cpfCliente']").sendKeys(cpf);
    await $("input[name='senhaCliente']").sendKeys(senha);
    await $("input[name='senhaConfirmacaoCliente']").sendKeys(senhaConfirmacao);
    await $("input[name='emailCliente']").sendKeys(email);
    await element(by.buttonText('Cadastrar')).click();
};

async function fazerLogin(email, senha) {
    await $("input[name='senhaLogin']").sendKeys(senha);
    await $("input[name='emailLogin']").sendKeys(email);
    await element(by.buttonText('Entrar')).click();
};

Given(/^Eu estou na pagina Crie sua conta!$/, { timeout: 2 * 60000 }, async () => {
    await browser.get("http://localhost:4200/cadastro-cliente");
    await expect(browser.getTitle()).to.eventually.equal("Crie sua conta!");
});

Given(/^Eu estou na pagina Login$/, { timeout: 2 * 60000 }, async () => {
    await browser.get("http://localhost:4200/login");
    await expect(browser.getTitle()).to.eventually.equal("Login");
});

Given(/^O CPF "([^\"]*)" ainda não foi cadastrado$/, async (cpf) => {
    await request.get(base_url + "usuarios")
        .then(body =>
            expect(body.includes(`"cpf":"${cpf}"`)).to.equal(false));
});

Given(/^O CPF "([^\"]*)" já foi cadastrado$/, async (cpf) => {
    await request.get(base_url + "usuarios")
        .then(body =>
            expect(body.includes(`"cpf":"${cpf}"`)).to.equal(true));
});

Given(/^O E-mail "([^\"]*)" ainda não foi cadastrado$/, async (email) => {
    await request.get(base_url + "usuarios")
        .then(body =>
            expect(body.includes(`"email":"${email}"`)).to.equal(false));
});

Given(/^O E-mail "([^\"]*)" já foi cadastrado$/, async (email) => {
    await request.get(base_url + "usuarios")
        .then(body =>
            expect(body.includes(`"email":"${email}"`)).to.equal(true));
});

Given(/^O E-mail "([^\"]*)" está cadastrado com senha "([^\"]*)" e tipo "([^\"]*)"$/, async (email, senha, tipo) => {
    await request.get(base_url + "usuarios")
    .then(body =>
        expect(body.includes(`"email":"${email}"`)).to.equal(true));
});

When(/^Eu cadastro com CPF "([^\"]*)" Nome "([^\"]*)" Senha: "([^\"]*)" Senha confirmação:"([^\"]*)" e E-mail: "([^\"]*)"$/, async (cpf, nome, senha, senhaConfirmacao, email) => {
    await criarUsuario(cpf, nome, senha, senhaConfirmacao, email);
});

When(/^Eu faço login E-mail: "([^\"]*)" Senha: "([^\"]*)"$/, async (email, senha) => {
    await fazerLogin(email, senha);
});

Then(/^Eu sou redirecionado para a página "([^\"]*)"$/, { timeout: 2 * 60000 }, async (tituloPagina) => {
    await expect(browser.getTitle()).to.eventually.equal(tituloPagina);
});

Then(/^Eu vejo uma mensagem de sucesso$/, { timeout: 2 * 60000 }, async () => {
    var targetEle = element(by.css(".toast-top-right"));
    var expectedEle = element(by.css(".toast-message"));

    await expect(targetEle.isPresent()).to.eventually.equal(true);
    await expect(expectedEle.isDisplayed()).to.eventually.equal(true);
});

Then(/^Eu vejo uma mensagem de erro$/, { timeout: 2 * 60000 }, async () => {
    var targetEle = element(by.css(".toast-top-right"));
    var expectedEle = element(by.css(".toast-message"));

    await expect(targetEle.isPresent()).to.eventually.equal(true);
    await expect(expectedEle.isDisplayed()).to.eventually.equal(true);
});

