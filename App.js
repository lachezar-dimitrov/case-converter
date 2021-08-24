import React, { useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };
  
  const addGoalHandler = () => {
    console.log(enteredGoal)
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});
