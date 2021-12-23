import { Voo } from "../../commons/entidade/voo";

export class VooRepository {
    voos: Voo[] = [];

    adicionar(voo: Voo): void{
        this.voos.push(voo);
    }

    buscarTodos(): Voo[] {
        return this.voos;
    }

}