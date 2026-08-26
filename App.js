import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import { colors } from './src/theme';

/**
 * Breath Bounty root component.
 *
 * This file intentionally stays thin: it provides the app shell,
 * safe-area handling, and status bar styling, then hands off to
 * HomeScreen for the full Breath Bounty experience.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});