import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ConfirmacaoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const nome = params.nome as string;
  const telefone = params.telefone as string;
  const endereco = params.endereco as string;
  const observacoes = params.observacoes as string;
  const nomeHamburguer = params.nomeHamburguer as string;
  const precoTotal = parseFloat(params.precoTotal as string);

  const voltarAoMenu = () => {
    router.push("/");
  };

  const fazerNovoPedido = () => {
    router.push("/");
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.sucessoHeader}>
        <Text style={styles.sucessoEmoji}>✅</Text>
        <Text style={styles.sucessoTitulo}>Pedido Confirmado!</Text>
        <Text style={styles.sucessoSubtitulo}>
          Seu pedido foi recebido com sucesso
        </Text>
      </View>

      <View style={styles.resumoPedido}>
        <Text style={styles.resumoTitulo}>Resumo do Pedido</Text>

        <View style={styles.itemPedido}>
          <Text style={styles.itemEmoji}>🍔</Text>
          <View style={styles.itemInfo}>
            <Text style={styles.itemNome}>{nomeHamburguer}</Text>
            <Text style={styles.itemPreco}>
              Preço: R$ {precoTotal.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dadosEntrega}>
        <Text style={styles.secaoTitulo}>Dados de Entrega</Text>

        <View style={styles.dadosItem}>
          <Text style={styles.dadosLabel}>👤 Nome:</Text>
          <Text style={styles.dadosValor}>{nome}</Text>
        </View>

        <View style={styles.dadosItem}>
          <Text style={styles.dadosLabel}>📱 Telefone:</Text>
          <Text style={styles.dadosValor}>{telefone}</Text>
        </View>

        <View style={styles.dadosItem}>
          <Text style={styles.dadosLabel}>📍 Endereço:</Text>
          <Text style={styles.dadosValor}>{endereco}</Text>
        </View>

        {observacoes && (
          <View style={styles.dadosItem}>
            <Text style={styles.dadosLabel}>📝 Observações:</Text>
            <Text style={styles.dadosValor}>{observacoes}</Text>
          </View>
        )}
      </View>

      <View style={styles.tempoEntrega}>
        <Text style={styles.tempoTitulo}>⏰ Tempo de Entrega</Text>
        <Text style={styles.tempoTexto}>30 a 45 minutos</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={fazerNovoPedido}
        >
          <Text style={styles.textoBotaoSecundario}> Fazer Novo Pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPrimario} onPress={voltarAoMenu}>
          <Text style={styles.textoBotaoPrimario}> Voltar ao Menu</Text>
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
  sucessoHeader: {
    backgroundColor: "#4CAF50",
    padding: 30,
    alignItems: "center",
  },
  sucessoEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  sucessoTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  sucessoSubtitulo: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  resumoPedido: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resumoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  itemPedido: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
  },
  itemEmoji: {
    fontSize: 40,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  itemQuantidade: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  itemPreco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  dadosEntrega: {
    backgroundColor: "#fff",
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  dadosItem: {
    marginBottom: 12,
  },
  dadosLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 3,
  },
  dadosValor: {
    fontSize: 16,
    color: "#333",
  },
  tempoEntrega: {
    backgroundColor: "#FFF3CD",
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  tempoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#856404",
    marginBottom: 5,
  },
  tempoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#856404",
    marginBottom: 5,
  },
  tempoObservacao: {
    fontSize: 14,
    color: "#856404",
    textAlign: "center",
  },
  botoesContainer: {
    padding: 15,
    gap: 10,
  },
  botaoPrimario: {
    backgroundColor: "#FF6B35",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotaoPrimario: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoSecundario: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  agradecimento: {
    padding: 20,
    alignItems: "center",
  },
});
