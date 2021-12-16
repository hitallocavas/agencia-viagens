import express = require('express');
import { LoginDTO } from '../commons/dto/logindto';

import { Usuario } from '../commons/entidade/usuario';
import { UsuarioService } from './usuario/usuarioservice'

var taserver = express();

var usuarioService: UsuarioService = new UsuarioService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

taserver.use(allowCrossDomain);
taserver.use(express.json());


taserver.get('/usuarios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(usuarioService.buscarTodos()));
})

taserver.post('/usuarios', function (req: express.Request, res: express.Response) {
  var usuario: Usuario = <Usuario>req.body;

  try {
    usuario = usuarioService.cadastrar(usuario);
    res.send({ "mensagem": "Cadastro realizado com sucesso." });
  } catch (error) {
    res.status(400).send({ "mensagem": error.message });
  }
})

taserver.post('/login', function (req: express.Request, res: express.Response) {
  var loginDTO: LoginDTO = <LoginDTO>req.body;

  try {
    var usuario = usuarioService.login(loginDTO);
    res.send(JSON.stringify(usuario));
  } catch (error) {
    res.status(400).send({ "mensagem": error.message });
  }
})

var server = taserver.listen(3000, function () {
  console.log('Agencia de viagens disponível na porta 3000!');
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }