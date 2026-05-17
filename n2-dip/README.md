# 🟡 Nível 2: DIP (Mocks)

O `ServicoNotificacao` depende de um gateway de e-mail. Aplique injeção de dependência para testá-lo isoladamente.

### Tarefas:
- [x] Injetar `GatewayEmail` no construtor do serviço.
- [x] Usar `jest.fn()` para criar um Mock do gateway no teste.
- [x] Validar se o gateway é chamado com os dados corretos.

### Como rodar:
```bash
npm install && npm test
```
