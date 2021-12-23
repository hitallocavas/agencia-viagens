import { Voo } from "../../commons/entidade/voo";
import { VooRepository } from "./voorepository";

export class VooService {
    vooRepository: VooRepository = new VooRepository();

    cadastrar(voo: Voo): void {
        this.vooRepository.adicionar(voo);
    }

    buscarTodos(): Voo[] {
        return this.vooRepository.buscarTodos();
    }
}