import React,{useEffect, useState, isFocused} from 'react';
import {View,TextInput,TouchableOpacity,Text,StyleSheet} from 'react-native';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0GqZlHFw3DZBgVbMcEwtML7oAnoQxeWE",
  authDomain: "project1-adb9d.firebaseapp.com",
  databaseURL: "https://project1-adb9d-default-rtdb.firebaseio.com",
  projectId: "project1-adb9d",
  storageBucket: "project1-adb9d.appspot.com",
  messagingSenderId: "1075416130700",
  appId: "1:1075416130700:web:d67f9c80fb846e9a0bc7a9",
  measurementId: "G-RKYX47XDQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const MyFrom =({navigation}) => {
     const [name,setName] =useState('');
     const [age, setAge] =useState('');
     const [showSuccessMessage,setShowSuccessMessage] = useState(false);
     const [showInvaledMessage,setShowInvaledMessage] = useState(false);


     
      
   
    const handleNameChange=(text) =>{
      setName(text);

};


const handleAgeChange=(text) =>{
  setAge(text);
  setShowInvaledMessage(true);
};
  

const handleSubmit = () => {
  if((name.trim() === '')&&( age.trim().length < 5)) {
    setShowInvaledMessage(true);

    return;
    


  };
  
  setShowSuccessMessage(true);
  navigation.navigate('create')
  setShowInvaledMessage(false);


};




return(
  
  <View style={style.container}>
  <Text style={style.label}>Name:</Text>
  <TextInput
  autofocus={true}
  style={style.input}
  placeholder="Enter your name"
  value={name}
  onChangeText={handleNameChange}


  />
  <Text style ={style.label}>Password:</Text>
  <TextInput
     style={ { width:'50%', height:50, borderWidth:5, borderColor:'black' }}
      placeholder="Enter your Password"
      onMagicTap={handleAgeChange}
      value={age}
      onChangeText={handleAgeChange}
      keyboardType="numeric"
      />
      
     
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
         <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text  onPress={() => navigation.navigate('App2')}>Sigup</Text>
      

      {showInvaledMessage && (
        <Text style={style.warning}>Enter any text</Text>

      )}

      {showSuccessMessage && (
        <Text style={style.SuccessMessage}>Record added successfully</Text>

      )};
      </View>
);
      };

  const style = StyleSheet.create({
    container: {
      flex:1,
      justifycontent:'center',
      alignItems:'center',
      paddingHorizontal:20,
    },
    label:{
      fontSize:16,
      fontWeight:'bold',
      marginBottom:10,
      padding:10,
      
    },

    warning:{
      fontFamily:'monospace',
      color:'red',


    },
    input:{
      backgroundColor:'gray',
      width:'50%                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ',
      height:40,
      borderColor:'red',
      borderWidth:1,
      borderRadius: 5,
      paddingHorizontal:10,
      marginBottom:20,
    },
    button: {
      backgroundColor:'#007AFF',
      borderRadius:5,
      paddingVertical:10,
      paddingHorizontal:20,

    },
    buttonText:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold',

    },
    SuccessMessage:{
      fontSize:18,
      fontWeight:'bold',
      color:'green',
      marginTop:20,

    },
  });
  export default MyFrom;