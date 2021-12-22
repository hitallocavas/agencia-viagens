import { Voo } from "../../commons/entidade/Voo";

export class VooRepository {
    Voos: Voo[] = [];

    adicionar(voo: Voo): void {
        this.Voos.push(voo);
    }

    buscarTodos(): Voo[] {
        return this.Voos;
    }

}