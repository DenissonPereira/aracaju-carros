import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { AracajuCarrosProvider } from './src/context';

export default function App() {
  return (
    <AracajuCarrosProvider>
      <Routes />
    </AracajuCarrosProvider>
  );
}
