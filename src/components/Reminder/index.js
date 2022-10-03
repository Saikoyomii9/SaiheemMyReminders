import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Reminder = props => {
  
  const post = props.post; //added

  const onPress = () => { //added function
    console.log(post.name);
  }


  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.touchable} onPress={onPress}> 
          <View style={{flex:2}}>
            <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
            <Text style={styles.desc} numberOfLines={1}>{post.desc}</Text> 
          </View>
          <View style={{flex:1}}>
            <Text style={styles.date}>{post.date}</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
};

export default Reminder;