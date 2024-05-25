import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import NowShowing from "../components/NowShowing";
import ComingSoon from "../components/ComingSoon";


const Movies = () => {
  const [optionSelected, setOptionSelected] = useState(true);

  return (
    <>
      <SafeAreaView className="text-white bg-white">
        <Header />
      </SafeAreaView>

      <View className="felx flex-row justify-evenly items-center p-3">
        <TouchableOpacity onPress={() => setOptionSelected(true)}>
          <Text
            className={`text-black ${
              optionSelected == true ? "text-red" : "text-black"
            }`}
          >
            Now Showing
          </Text>
          {
            optionSelected == true && <View style={{backgroundColor:'red', height:2, width:45,marginTop:5, alignSelf:"center"}}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOptionSelected(false)}>
          <Text
            className={`text-black ${
              optionSelected == false ? "text-red" : "text-black"
            }`}
          >
            
            Coming Soon
          </Text>
          {
            optionSelected == false && <View style={{backgroundColor:'red', height:2, width:45,marginTop:5, alignSelf:"center"}}></View>
          }
        </TouchableOpacity>
      </View>

      {optionSelected == true ? <NowShowing /> : <ComingSoon />}
    </>
  );
};

export default Movies;
