import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Saved</Text>
    </SafeAreaView>
  );
}
