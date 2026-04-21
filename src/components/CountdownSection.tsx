import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  timeLeft: number;
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
};

export function CountdownSection({timeLeft, isRunning, onToggle, onReset}: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Countdown Timer</Text>
      <Text style={styles.time}>{timeLeft}s</Text>
      <View style={styles.row}>
        <Pressable
          style={[styles.btn, isRunning ? styles.btnPause : styles.btnStart]}
          onPress={onToggle}>
          <Text style={styles.btnText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnReset]} onPress={onReset}>
          <Text style={styles.btnText}>Reset</Text>
        </Pressable>
      </View>
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
  time: {
    fontSize: 56,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnStart: {
    backgroundColor: 'green',
  },
  btnPause: {
    backgroundColor: 'orange',
  },
  btnReset: {
    backgroundColor: 'red',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
