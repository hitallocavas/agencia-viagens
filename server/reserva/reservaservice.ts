import { Reserva } from "../../commons/entidade/reserva";
import { ReservaRepository } from "./reservarepository";

export class ReservaService {
    reservaRepository: ReservaRepository = new ReservaRepository();

    cadastrar(reserva: Reserva): void {
        this.reservaRepository.cadastrar(reserva);
    }

    cancelar(reserva: Reserva): void {
        this.reservaRepository.cancelar(reserva);
    }

    buscarTodos(): Reserva[] {
        return this.reservaRepository.buscarTodos();
    }

    buscarPorCpf(cpf: string): Reserva[] {
        return this.reservaRepository.buscarPorCpf(cpf);
    }
}