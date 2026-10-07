import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },

  // TÍTULO
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#1E1E1E',
  },

  // CARD DO SALDO
  balanceCard: {
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#1E1E1E',
  },

  balanceLabel: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF',
  },

  // CARDS DE ENTRADAS E GASTOS
  row: {
    flexDirection: 'row',
    gap: 10,
  },

  infoCard: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
  },

  infoLabel: {
    fontSize: 14,
    color: '#666666',
  },

  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#1E1E1E',
  },

  // BOTÕES
  button: {
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ÁREA DOS FORMULÁRIOS
  form: {
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
  },

  formLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  // INPUTS
  input: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

  // TÍTULO DAS MOVIMENTAÇÕES
  movementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    color: '#1E1E1E',
  },

  // CADA MOVIMENTAÇÃO
  movement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
  },

  movementDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },

  movementValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },

  // ÁREA DOS BOTÕES DE SALDO
  balanceActions: {
    marginTop: 20,
    gap: 5,
  },
});