import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function PedidoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const nomeHamburguer = params.nome as string;
  const precoUnitario = parseFloat(params.preco as string);

  const finalizarPedido = () => {
    if (!nome.trim() || !telefone.trim() || !endereco.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    router.push({
      pathname: "/confirmacao",
      params: {
        nome,
        telefone,
        endereco,
        observacoes,
        nomeHamburguer,
        precoTotal: precoUnitario.toFixed(2),
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.produtoInfo}>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.nomeProduto}>{nomeHamburguer}</Text>
        <Text style={styles.preco}>R$ {precoUnitario.toFixed(2)}</Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.tituloFormulario}>Dados para Entrega</Text>

        <Text style={styles.label}>Nome Completo *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone *</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Endereço Completo *</Text>
        <TextInput
          style={[styles.input, styles.inputMultiline]}
          placeholder="Rua, número, bairro, cidade"
          value={endereco}
          onChangeText={setEndereco}
          multiline
          numberOfLines={3}
        />

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={finalizarPedido}
        >
          <Text style={styles.textoBotaoFinalizar}>🛒 Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  produtoInfo: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  preco: {
    fontSize: 16,
    color: "#FF6B35",
    fontWeight: "bold",
  },

  formulario: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
  },
  tituloFormulario: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inputMultiline: {
    height: 80,
    textAlignVertical: "top",
  },
  botaoFinalizar: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  textoBotaoFinalizar: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
