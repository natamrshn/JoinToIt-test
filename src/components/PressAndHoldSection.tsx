import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  isHeld: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
};

export function PressAndHoldSection({isHeld, onPressIn, onPressOut}: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Press and Hold</Text>
      <Pressable
        style={[styles.holdBtn, isHeld && styles.holdBtnActive]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <Text style={[styles.holdBtnText, isHeld && styles.holdBtnTextActive]}>
          {isHeld ? '✓ Held!' : 'Press and hold'}
        </Text>
      </Pressable>
      <Text style={styles.hint}>Hold for 1 second to activate</Text>
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
  holdBtn: {
    height: 140,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  holdBtnActive: {
    backgroundColor: 'blue',
    borderColor: 'darkblue',
  },
  holdBtnText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'dimgray',
  },
  holdBtnTextActive: {
    color: 'white',
  },
  hint: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
});
