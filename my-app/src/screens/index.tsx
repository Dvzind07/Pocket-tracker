import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './style';

export default function SignIn() {
  const [saldo, setSaldo] = useState(500);
  const [valorGasto, setValorGasto] = useState('');
  const [mostrarInput, setMostrarInput] = useState(false);
  const [gastos, setGastos] = useState(300);
  const [valorSaldo, setValorSaldo] = useState('');
  const [valorRetirada, setValorRetirada] = useState('');

  const [movimentacoes, setMovimentacoes] = useState([
    {
      id: '1',
      descricao: 'Mesada',
      valor: 800,
      tipo: 'entrada',
    },
    {
      id: '2',
      descricao: 'Gasto inicial',
      valor: 300,
      tipo: 'gasto',
    },
  ]);

  return (
    <View style={styles.container}>

      {/* TÍTULO */}
      <Text style={styles.title}>
        PocketTrack
      </Text>

      {/* SALDO */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>
          Saldo disponível
        </Text>

        <Text style={styles.balance}>
          R$ {saldo},00
        </Text>
      </View>

      {/* ENTRADAS E GASTOS */}
      <View style={styles.row}>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Entradas
          </Text>

          <Text style={styles.infoValue}>
            R$ 800,00
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Gastos
          </Text>

          <Text style={styles.infoValue}>
            R$ {gastos},00
          </Text>
        </View>

      </View>

      {/* ADICIONAR GASTO */}
      <Pressable
        style={styles.button}
        onPress={() => setMostrarInput(true)}
      >
        <Text style={styles.buttonText}>
          Adicionar gasto
        </Text>
      </Pressable>

      {/* FORMULÁRIO DO GASTO */}
      {mostrarInput && (
        <View style={styles.form}>

          <Text style={styles.formLabel}>
            Digite o valor do gasto:
          </Text>

          <TextInput
            style={styles.input}
            value={valorGasto}
            onChangeText={setValorGasto}
            placeholder="Ex: 50"
            keyboardType="numeric"
          />

          <Pressable
            style={styles.button}
            onPress={() => {
              const valor = Number(valorGasto);

              setSaldo(saldo - valor);
              setGastos(gastos + valor);

              setMovimentacoes([
                ...movimentacoes,
                {
                  id: Date.now().toString(),
                  descricao: 'Gasto',
                  valor: valor,
                  tipo: 'gasto',
                },
              ]);

              setValorGasto('');
              setMostrarInput(false);
            }}
          >
            <Text style={styles.buttonText}>
              Confirmar gasto
            </Text>
          </Pressable>

        </View>
      )}

      {/* AÇÕES DE SALDO */}
      <View style={styles.balanceActions}>

        <TextInput
          style={styles.input}
          value={valorSaldo}
          onChangeText={setValorSaldo}
          placeholder="Valor para adicionar"
          keyboardType="numeric"
        />

        <Pressable
          style={styles.button}
          onPress={() => {
            const valor = Number(valorSaldo);

            setSaldo(saldo + valor);
            setValorSaldo('');
          }}
        >
          <Text style={styles.buttonText}>
            + Adicionar saldo
          </Text>
        </Pressable>

        <TextInput
          style={styles.input}
          value={valorRetirada}
          onChangeText={setValorRetirada}
          placeholder="Valor para retirar"
          keyboardType="numeric"
        />

        <Pressable
          style={styles.button}
          onPress={() => {
            const valor = Number(valorRetirada);

            setSaldo(saldo - valor);
            setValorRetirada('');
          }}
        >
          <Text style={styles.buttonText}>
            - Tirar saldo
          </Text>
        </Pressable>

      </View>

      {/* MOVIMENTAÇÕES */}
      <Text style={styles.movementsTitle}>
        Últimas movimentações
      </Text>

      {movimentacoes.map((movimentacao) => (
        <View
          key={movimentacao.id}
          style={styles.movement}
        >
          <Text style={styles.movementDescription}>
            {movimentacao.descricao}
          </Text>

          <Text style={styles.movementValue}>
            R$ {movimentacao.valor},00
          </Text>
        </View>
      ))}

    </View>
  );
}