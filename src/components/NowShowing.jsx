import { View, FlatList, Image, TouchableHighlight  } from "react-native";
import React from "react";
import { nowShowingMovies } from "../utils/Data";
import { useNavigation } from "@react-navigation/native";

const NowShowing = () => {
    const nav = useNavigation();
  return (
    <FlatList
      numColumns={2}
      data={nowShowingMovies}
      renderItem={({ item, index }) => (
        <View className="flex-1 p-1">
          <TouchableHighlight
           onPress={()=>nav.navigate('ShowDetails',{item})}>
            <Image
              source={{ uri: item.img }}
              className="w-full h-[280px] rounded"
              resizeMode="cover"
            />
          </TouchableHighlight >
        </View>
      )}
    />
  );
};

export default NowShowing;
