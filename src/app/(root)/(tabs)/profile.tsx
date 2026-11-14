import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { signOut } = useAuth();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
