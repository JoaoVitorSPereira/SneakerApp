import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Router from './src/routes/app.routes';
import ProductsContext from './src/context/CartContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    KhumbSansRegular: require('./assets/fonts/KumbhSans-Regular.ttf'),
    KhumbSansBold: require('./assets/fonts/KumbhSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ProductsContext>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </ThemeProvider>
      </ProductsContext>
    );
  }
}
