import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');
const AddReminder = props => {

        const navigation = useNavigation();
        //Name of shopping, store, date
        const [title, setTitle] = useState('');
        const [description, setDesc] = useState('');
        const [date, setDate] = useState('');

        const onListAdd = ()  => { //Validation //declaring a function
                if(!title) {
                        alert( 'Please enter Reminder title.');
                        return;
                }
                if(!description) {
                        alert('Please enter reminder description');
                }
                if(!date ) {
                        alert('Please enter a date in format YYYT-MM-DD!');
                        return;
                } 

                try {
                        database.addReminder(title, description, date)
                } catch (error) {
                        console.log('Error adding list  ' + error);
                }
        
                
                alert(title + ' Added ');//Alert List has been added
        }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
                <TextInput
                        value={title}
                        onChangeText={value => setTitle(value)}
                        style={styles.name}
                        clearButtonMode={'while-editing'}
                        placeholder={'Enter List Name'}
                        placeholderTextColor={'grey'}
                />
                <TextInput  
                        value={description}
                        onChangeText={value => setDesc(value)}
                        style={styles.store}
                        clearButtonMode={'while-editing'}
                        placeholder={'Enter Store'}
                        placeholderTextColor={'grey'}
                />
                <TextInput  
                        value={date}
                        onChangeText={value => setDate(value)}
                        style={styles.date}
                        clearButtonMode={'while-editing'}
                        placeholder={'Enter Date in format YYYY-MM-DD'}
                        placeholderTextColor={'grey'}
                />

        </View>
        <View style={styles.bottomContainer}>
                 <Pressable style={styles.button} onPress={onListAdd}> 
                        <Text style={styles.buttonText}> Add</Text>
                </Pressable>

        </View>
    </View>
  );
  };

export default AddReminder;