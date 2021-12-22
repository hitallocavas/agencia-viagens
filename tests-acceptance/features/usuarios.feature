Feature: As a novo cliente
         I want to me cadastrar no Sistema
         So that I can fazer login como CLIENTE

Scenario: Cadastro de cliente com cpf e e-mail não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "62779847050" ainda não foi cadastrado
    Given O E-mail "hcs3@cin.ufpe.br" ainda não foi cadastrado
    When Eu cadastro com CPF "62779847050" Nome "Hitallo Cavalcanti da Silva" Senha: "teste" Senha confirmação:"teste" e E-mail: "hcs3@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso

Scenario: Cadastro de cliente com cpf já cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "62779847050" já foi cadastrado
    Given O E-mail "hitallosilva.96@gmail.com" ainda não foi cadastrado
    When Eu cadastro com CPF "62779847050" Nome "Hitallo Cavalcanti da Silva" Senha: "teste" Senha confirmação:"teste" e E-mail: "hitallosilva.96@gmail.com" 
    Then Eu vejo uma mensagem de erro

Scenario: Cadastro de cliente com e-mail já cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "40570104084" ainda não foi cadastrado
    Given O E-mail "hcs3@cin.ufpe.br" já foi cadastrado
    When Eu cadastro com CPF "40570104084" Nome "Hitallo Cavalcanti da Silva" Senha: "teste" Senha confirmação:"teste" e E-mail: "hitallosilva.96@gmail.com"
    Then Eu vejo uma mensagem de erro

Scenario: Cadastro de cliente com senha diferente da senha de confirmação
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "02963152060" ainda não foi cadastrado
    Given O E-mail "hitallocavas@hotmail.com" ainda não foi cadastrado
    When Eu cadastro com CPF "02963152060" Nome "Hitallo Cavalcanti da Silva" Senha: "teste" Senha confirmação:"teste1" e E-mail: "hitallocavas@hotmail.com"
    Then Eu vejo uma mensagem de erro

Scenario: Login de cliente com sucesso
    Given Eu estou na pagina Login
    Given O E-mail "hcs3@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
    When Eu faço login E-mail: "hcs3@cin.ufpe.br" Senha: "teste"
    Then Eu vejo uma mensagem de sucesso
    Then Eu sou redirecionado para a página "Reservas"

Scenario: Login de cliente e-mail não cadastrado
    Given Eu estou na pagina Login
    Given O E-mail "hitallosilva@yahoo.com" ainda não foi cadastrado
    When Eu faço login E-mail: "hitallosilva@yahoo.com" Senha: "teste"
    Then Eu vejo uma mensagem de erro

Scenario: Login de cliente com senha inválida
    Given Eu estou na pagina Login
    Given O E-mail "hcs3@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
    When Eu faço login E-mail: "hcs3@cin.ufpe.br" Senha: "teste@senha@invalida"
    Then Eu vejo uma mensagem de erro
