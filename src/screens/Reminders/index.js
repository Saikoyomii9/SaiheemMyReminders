import React, { useState, useEffect } from 'react';
import  { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import openDatabase hook
import { openDatabase} from "react-native-sqlite-storage"

//use the hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const remindersTableName = 'reminders';


const RemindersScreen = props => {

    const navigation = useNavigation();

    const [reminders, setRem] = useState([]);

    useEffect(() => {//use effect only wen screen is in focus
      const reminder = navigation.addListener('focus', () => {
        
        // declare an empty arry that will store the results of the 
        //SELECT
        let results = [];
        // declare a transaction that will execute the SELECT
        shopperDB.transaction(txn => {
          
          //execute SELECT
          txn.executeSql(
            `SELECT * FROM  ${remindersTableName}`,
            [],
            // cal back function that will handle the results form the SELECT
            (_, res) => {
              
              // get number of rows of data selected 
              let len = res.rows.length;
              console.log('Length of Lists ' + len);
              // check if more than one ro was returned
              if (len > 0) {
                // loop through the rows 
                for (let i = 0; i < len; i++) {
                  // push a row of data at a time
                  let item  = res.rows.item(i);
                  results.push({
                    id: item.id,
                    name: item.title,
                    store: item.desc,
                    date: item.date,
                  });
                  }
                  //assign the results array to the lists table
                  setRem(results);
                
              } else {
                //if no rows are returned set the lists state variable to an empty array
                setRem([]);
              }
            },
            error => {
              console.log('Error getting listst  ' + error.message);
            },
          )
        });
      });
      return reminder;
    });
    

  return (
    <View style={styles.container}>
     <View>
     <FlatList
          data={reminders}
          renderItem={({item}) => <List post={item} />} 
          keyExtractor={item=> item.id}
          />
          </View>
          <View style={styles.bottom}>
      <TouchableOpacity
       style={styles.button}
       onPress={()=>navigation.navigate('Add Reminder')}
       >
        <Text style={styles.buttonText}>Add Reminder</Text>

      </TouchableOpacity>
      </View>

     
    </View>
  );
};

export default RemindersScreen;