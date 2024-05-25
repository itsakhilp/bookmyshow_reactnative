import { View, FlatList, Image, TouchableHighlight  } from "react-native";
import React from "react";
import { nowShowingMovies } from "../utils/Data";

const NowShowing = () => {
  return (
    <FlatList
      numColumns={2}
      data={nowShowingMovies}
      renderItem={({ item, index }) => (
        <View className="flex-1 p-1">
          <TouchableHighlight >
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
