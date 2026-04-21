import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  counter: number;
  onIncrement: () => void;
};

export function DebounceSection({counter, onIncrement}: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Debounced Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Pressable style={styles.btn} onPress={onIncrement}>
        <Text style={styles.btnText}>Increment</Text>
      </Pressable>
      <Text style={styles.hint}>Counter updates 2s after the last tap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    gap: 16,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  counter: {
    fontSize: 56,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'indigo',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  hint: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
});
