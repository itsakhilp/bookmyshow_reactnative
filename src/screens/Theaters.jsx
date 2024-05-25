import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Seats } from "../utils/Data";

const Theaters = () => {

    const [selectSeat, setSelectSeat] = useState()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text  style={{marginTop:150,justifyContent:'center',fontSize:30,padding:5}}>IMAX SCREEN A1</Text>
      <FlatList
      numColumns={6}
        data={Seats}
        renderItem={({ item, index }) => (
          <TouchableOpacity
          onPress={()=>setSelectSeat(index)}
            style={{
              height: 40,
              width: 40,
              backgroundColor: selectSeat== index? 'green':"white",
              borderColor:'green',
              borderWidth:1,
              margin:'3%',
              alignItems:'center',
              borderTopLeftRadius:10,
              borderTopRightRadius:10
            }}
          ><Text className="text-green text-center">{item}</Text></TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Theaters;
