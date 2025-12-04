import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

interface Hamburguer {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const hamburgueres: Hamburguer[] = [
  {
    id: 1,
    nome: "X-Burger Clássico",
    descricao: "Hambúrguer artesanal, queijo, alface, tomate e molho especial",
    preco: 18.9,
    imagem: "🍔",
  },
  {
    id: 2,
    nome: "X-Bacon Deluxe",
    descricao:
      "Hambúrguer duplo, bacon crocante, queijo cheddar e cebola caramelizada",
    preco: 24.9,
    imagem: "🥓",
  },
  {
    id: 3,
    nome: "X-Frango Supreme",
    descricao:
      "Peito de frango grelhado, queijo, alface, tomate e maionese temperada",
    preco: 19.9,
    imagem: "🐔",
  },
];

export default function MenuScreen() {
  const router = useRouter();

  const selecionarHamburguer = (hamburguer: Hamburguer) => {
    router.push({
      pathname: "/pedido",
      params: {
        id: hamburguer.id.toString(),
        nome: hamburguer.nome,
        preco: hamburguer.preco.toString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          }}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          
          <Text style={styles.titulo}> Burger House</Text>
          <Text style={styles.subtitulo}>
            Os melhores hambúrgueres da cidade!
          </Text>
          <Text style={styles.subtitulo}>Escolha abaixo!</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {hamburgueres.map((hamburguer) => (
          <TouchableOpacity
            key={hamburguer.id}
            style={styles.card}
            onPress={() => selecionarHamburguer(hamburguer)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.emoji}>{hamburguer.imagem}</Text>
              <View style={styles.cardInfo}>
                <Text style={styles.nomeHamburguer}>{hamburguer.nome}</Text>
                <Text style={styles.descricao}>{hamburguer.descricao}</Text>
                <Text style={styles.preco}>
                  R$ {hamburguer.preco.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    position: "relative",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  headerOverlay: {
    backgroundColor: "rgba(255, 107, 53, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  nomeHamburguer: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
  },
  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B35",
  },
});
