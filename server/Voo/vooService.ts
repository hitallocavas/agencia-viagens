import { Voo } from '../../commons/entidade/Voo'
import { VooRepository } from './vooRepository'

export class VooService {

    repository: VooRepository = new VooRepository();

    cadastrar(voo: Voo): Voo {
        this.repository.adicionar(voo);
        return voo;
    }

    buscarTodos(): Voo[]{
        return this.repository.buscarTodos();
    }
}