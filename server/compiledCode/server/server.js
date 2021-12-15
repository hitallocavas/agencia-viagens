"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.server = void 0;
const express = require("express");
const cadastrousuario_1 = require("./cadastrousuario");
var taserver = express();
var cadastroUsuario = new cadastrousuario_1.CadastroUsuario();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
taserver.use(allowCrossDomain);
taserver.use(express.json());
taserver.get('/usuarios', function (req, res) {
    res.send(JSON.stringify(cadastroUsuario.buscarTodos()));
});
taserver.post('/usuarios', function (req, res) {
    var usuario = req.body;
    try {
        usuario = cadastroUsuario.cadastrar(usuario);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
var server = taserver.listen(3000, function () {
    console.log('Agencia de viagens disponível na porta 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=server.js.map