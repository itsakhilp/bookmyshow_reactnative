import { View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { upComing } from "../utils/Data";

const ComingSoon = () => {
  return (
    <FlatList
      numColumns={2}
      data={upComing}
      renderItem={({ item, index }) => (
        <View className="flex-1 p-1">
          <TouchableOpacity>
            <Image
              source={{ uri: item.img }}
              className="w-full h-[280px] rounded"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ComingSoon;
