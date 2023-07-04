import React,{useEffect, useState, isFocused} from 'react';
import {View,TextInput,TouchableOpacity,Text,StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const MyFrom =({navigation}) => {
     const [name,setName] =useState('');
     const [Password, setPassword] =useState('');
     const [age, setAge] =useState('');
     const [showSuccessMessage,setShowSuccessMessage] = useState(false);
     const [showInvaledMessage,setShowInvaledMessage] = useState(false);


     
      
   
    const handleNameChange=(text) =>{
      setName(text);

};
const handlePasswordChange=(text) =>{
    setPassword(text);

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
  <Text style={style.label}>Username</Text>
  <TextInput
  autofocus={true}
  style={style.input}
  placeholder="Username"
  value={name}
  onChangeText={handleNameChange}


  />
  <Text style ={style.label}>Password</Text>
  <TextInput
     style={ { width:'50%', height:50, borderWidth:5, borderColor:'black' }}
      placeholder="Enter your Password"
      onMagicTap={handlePasswordChange}
      value={Password}
      onChangeText={handlePasswordChange}
      keyboardType="Password"

      />

       <Icon
            name={Password ? 'eye-slash' : 'eye' }
            name1={Password ?  'Hide' : 'show'}
            size={25}
            color='black'
            onPress={() => setPassword(!Password)}
w
          />
      
     
      <Text style={style.label}>Age</Text>
      
      <TextInput
     style={ { width:'50%', height:50, borderWidth:5, borderColor:'black' }}
      placeholder="Enter your age"
      onMagicTap={handleAgeChange}
      value={age}
      onChangeText={handleAgeChange}
      keyboardType="numeric"
      />
     
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
         <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
      

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
    icon:{
      position:'absolute',
      right:20

    },

    warning:{
      fontFamily:'monospace',
      color:'red',


    },
    input:{
      width:'50%',
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