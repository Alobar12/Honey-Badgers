import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import TabBar from './src/tabBar';
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  const [fontsLoaded] = useFonts({
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf")
  })

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color={"rgb(0,0,0)"} />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
