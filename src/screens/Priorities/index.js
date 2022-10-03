import React from 'react';
import  {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const PrioritiesScreen = props => {

        const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style = {styles.bottom}>
                <TouchableOpacity
                style ={styles.button}
                onPress={()=>console.log('Add Priority!')}
                >
                <Text style ={styles.buttonText}> Add Priority </Text>
                </TouchableOpacity>

        </View>
    </View>
  );

};

export default PrioritiesScreen;