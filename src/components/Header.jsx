import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
   
     <View className="px-3 py-3 flex flex-row justify-between items-center">
      <View className="flex flex-row items-center ">
        <EvilIcons name="location" size={30} color="red" />
        <Text className="font-bold text-1xl"> Hyderabad</Text>
      </View>
      <AntDesign name="search1" size={24} color="red" />
    </View>
   
  );
};

export default Header;
