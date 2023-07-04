import React from 'react';
import { View, Image, ImageBackground, Alert } from 'react-native';

const foods = ''

const Food = ({ foods, backgroundGif }) => {
  const handlePress = (food) => {
    Alert.alert(`You pressed ${food.name}!`);
  };

  return (
    <ImageBackground source={backgroundGif} style={{ flex: 1 }}>
      <View>
        {foods.map((food) => (
          <Image
            key={food.id}
            source={food.image}
            style={{ width: 100, height: 100 }}
            onPress={() => handlePress(food)}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

export default Food;
