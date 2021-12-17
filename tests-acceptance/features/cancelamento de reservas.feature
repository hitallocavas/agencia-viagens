Feature: o passageiro quer cancela a reserva
Scenario: Reserva cancelada com sucesso
Given estou na página “Reservas”
And vejo um aviso de cancelamento de título “Deseja confirmar cancelamento de reserva?” 
And codigo avião "AD32B"
When eu confirmo o cancelamento
Then eu vejo uma mensagem de sucesso
And a reserva para o avião "AD32B" não está na lista de reservas

Feature:o passageiro iria cancelar a reserva mais desiste
Scenario: Reserva não cancelada
Given estou na página “Reservas”
And vejo um aviso de cancelamento de título “Deseja confirmar cancelamento de reserva?” 
And codigo avião "AD32B"
When eu não confirmo o cancelamento
Then eu vejo uma mensagem de sucesso
And a reserva para o avião "AD32B" está na lista de reservas