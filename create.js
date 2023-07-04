import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text, Button,StatusBar,Image} from 'react-native';






const DATA = [


  
  
    {
        id:1,
        items:'AirPods  [3rd generation]',
        price:"₹19900.00*",
        offer:" ",
        ImageUri:'https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg'
        
       
    
    
    },

    {
      id:2,
      items:'IPhone 14 Pro',
      price:"₹22317.00",
      offer:"offer:'20%'",
      ImageUri:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'
  
  
  },{
    id:3,
    items:'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)',
    price:"₹79,999 M.R.P: ₹95,999 (17% off)",
    offer:"offer:'20%'",
    ImageUri:'https://m.media-amazon.com/images/I/61j99uUfXNL._AC_UY218_.jpg'


},{
  id:4,
  items:'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)',
  price:"₹79,999 M.R.P: ₹95,999 (17% off)",
  offer:"offer:'20%'",
  ImageUri:'https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY218_.jpg'


},{
  id:5,
  items:'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)',
  price:"₹79,999 M.R.P: ₹95,999 (17% off)",
  offer:"offer:'20%'",
  ImageUri:'https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY218_.jpg'


},
 
{
  id:5,
  items:'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)',
  price:"₹79,999 M.R.P: ₹95,999 (17% off)",
  offer:"offer:'20%'",
  ImageUri:'https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY218_.jpg'


},
{
  id:5,
  items:'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)',
  price:"₹79,999 M.R.P: ₹95,999 (17% off)",
  offer:"offer:'20%'",
  ImageUri:'https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY218_.jpg'


},

];

const Item = ({ImageUri, items, price, offer}) => (
  <View style={styles.itemcon}>
       

       <View style={styles.item}>
    <Image style={styles.image} source={{ uri: ImageUri }}/>
    <View style={styles.column}>
      <View style={styles.textRow}>
        <Text style={styles.leftText}> <a href='https://www.amazon.in/Samsung-Galaxy-Green-256GB-Storage/dp/B0BT9DVZLZ/ref=sr_1_1_sspa?keywords=samsung+s23+ultra+5g&qid=1686978743&sprefix=samsung+%2Caps%2C314&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>{items}</a></Text>
        <Text style={styles.rightText}>{price}</Text>
      </View>
      <Text style={styles.supportingText}>{offer}</Text>
    </View>
  </View>
</View>  
  
);


 








const Mobile = ({navigation}) => {
  return (

    <SafeAreaView style={styles.container}>

     




            <Text style={styles.header}>Mobile</Text>
            <Image source={{uri:'https://www.the-sun.com/wp-content/uploads/sites/6/2023/02/apple-logo-newnew-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1'}} style={{width:100,height:100, borderWidth:5, borderColor:'green'}} />


           
            

       
  
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item  ImageUri={item.ImageUri} items={item.items} price={item.price} offer={item.offer}  />}
        keyExtractor={item => item.id} contentContainerStyle={styles.contentContainer}
      />
       <Button 
      style={styles.click}
      title="Foods"
      onPress={()=> navigation.navigate('Foods')}
      />
    
    </SafeAreaView>
  
 
  
    
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    borderWidth:'5',
    borderColor:'black',
    marginTop: StatusBar.currentHeight || 0,
  },
  

  header:{
    fontFamily:'Cursive',
    fontSize:100,
    backgroundColor:'gray',

  },

  click:{
    width:10,
    height:5,
    marginLeft:100
    
  },


  


  item: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection:'row',
    borderWidth:5,
    borderColor:'black',


  },
 
 

 image:{
  width: 100,
  height: 100,
  borderWidth:5,
  borderColor:'silver'
  
 },


 text:{
  color:'white',
  fontSize:18,
  fontWeight:'bold',

},


column: {
  flexDirection: 'column',
  width:800,
  height:100
},
textRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
leftText: {
  color:'black',
  fontSize: 25,
  fontWeight: 'bold',
},
rightText: {
  fontSize: 25,
  fontFamily: 'bold',
  textAlign: 'right',
  color: 'black',
},
supportingText: {
  fontSize: 24,
  color: 'gray',
},


});

export default Mobile;
