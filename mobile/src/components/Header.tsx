import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

interface HeaderProps {
  title:string;
  showCancel?:boolean;
}

const Header = ({title, showCancel = true}: HeaderProps) => {
  const navigation = useNavigation();

  function handleGoBackHomeScreen(){
    navigation.navigate("HouseMap");
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      
      {showCancel ? (<BorderlessButton onPress={handleGoBackHomeScreen}>
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>) : (<View />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:24,
    backgroundColor:'#f9fafc',
    borderBottomWidth: 1,
    borderColor:'#dde3f0',
    paddingTop:44,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title: {
    color:'#8fa7b3',
    fontSize:16,
  }
})

export default Header;
