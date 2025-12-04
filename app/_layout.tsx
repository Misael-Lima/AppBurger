import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
      <Stack.Screen name="pedido" options={{ title: "Pedido" }} />
      <Stack.Screen name="confirmacao" options={{ title: "Confirmação" }} />
    </Stack>
  );
}
