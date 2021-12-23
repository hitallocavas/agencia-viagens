import { Reserva } from "../../commons/entidade/reserva";

export class ReservaRepository {
    reservas: Reserva[] = []

    cadastrar(reserva: Reserva): void {
        if (this.isReservaHorarioValido(reserva)) {
            this.reservas.push(reserva);
        } else {
            throw new Error("Horário de Reserva Inválido!");
        }
    }

    buscarTodos(): Reserva[] {
        return this.reservas;
    }

    buscarPorCpf(cpf: string): Reserva[] {
        return this.reservas.filter(reserva => reserva.cpfCliente == cpf)
    }

    isReservaHorarioValido(reservaCliente: Reserva): boolean {
            var now = new Date();
            let hourAtual = now.getHours();
            let minutesAtual = now.getMinutes();
            let horarioSaida = reservaCliente.voo.horarioSaida.split(':');
            let hourReserva = parseInt(horarioSaida[0]);
            let minutoReserva = parseInt(horarioSaida[1]);

            return (hourReserva > hourAtual) || ((hourReserva == hourAtual) && (minutoReserva >= minutesAtual))
    }
}