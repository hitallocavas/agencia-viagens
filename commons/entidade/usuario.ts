export class Usuario {
    nome!: string;
    email!: string;
    cpf!: string;
    senha!: string;
    tipo!: string;

    constructor() { }

    public static ofUsuarioCliente(): Usuario {
        var usuario: Usuario = new Usuario();
        usuario.tipo = "CLIENTE";
        return usuario;
    }
}