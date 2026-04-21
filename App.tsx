import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useCountdown} from './src/hooks/useCountdown';
import {useDebounce} from './src/hooks/useDebounce';
import {usePressAndHold} from './src/hooks/usePressAndHold';
import {CountdownSection} from './src/components/CountdownSection';
import {DebounceSection} from './src/components/DebounceSection';
import {PressAndHoldSection} from './src/components/PressAndHoldSection';

function App() {
  const countdown = useCountdown(60);

  const [counter, setCounter] = useState(0);
  const debouncedIncrement = useDebounce(() => setCounter(prev => prev + 1), 2000);

  const {onPressIn, onPressOut, isHeld} = usePressAndHold(() => {}, 1000);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.heading}>React Native Hooks Demo</Text>

          <CountdownSection
            timeLeft={countdown.timeLeft}
            isRunning={countdown.isRunning}
            onToggle={countdown.isRunning ? countdown.pause : countdown.start}
            onReset={countdown.reset}
          />

          <DebounceSection counter={counter} onIncrement={debouncedIncrement} />

          <PressAndHoldSection
            isHeld={isHeld}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          />

          <View style={styles.spacer} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
  },
  spacer: {
    height: 16,
  },
});

export default App;
