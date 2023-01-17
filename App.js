import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'

export default function App() {

  const [fontsLoaded] = useFonts({'OpenSans': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf')})

  return ( !fontsLoaded ? null :
    <View className={"my-auto mx-auto"}>
      <Text className={"text-2xl"}>className={"text-2xl"}</Text>
      <Text className={"text-2xl font-[OpenSans]"}>className={"text-2xl font-[OpenSans]"}</Text>
      <View className={"h-10"} />
      <Text className={"text-2xl"}>className={"text-2xl"}</Text>
      <Text className={"text-2xl font-sans"}>className={"text-2xl font-sans"}</Text>
    </View>
  );
}
