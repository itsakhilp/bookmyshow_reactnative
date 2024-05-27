import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Store } from "./Context/Wrapper";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const nav = useNavigation()
  const {data, setData} = useContext(Store);
  return (
   
     <View className="px-3 py-3 flex flex-row justify-between items-center">
      <TouchableOpacity className="flex flex-row items-center " onPress={()=> nav.navigate('SelectCity')}>
        <EvilIcons name="location" size={30} color="red" />
        <Text className="font-bold text-1xl"> {data != null ? data : 'Select City' }</Text>
      </TouchableOpacity>
      <AntDesign name="search1" size={24} color="red" />
    </View>
   
  );
};

export default Header;
