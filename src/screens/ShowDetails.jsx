import { View, FlatList, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theaters } from "../utils/Data";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { dates } from "../utils/Data";
import { useNavigation } from "@react-navigation/native";

const ShowDetails = ({ route }) => {
  const { title } = route.params.item;
  const [dateSelected, setDateSelected] = useState();
  const [date, setDate] = useState();
  const nav = useNavigation();
  return (
    <SafeAreaView className="text-white bg-white ">
      <View
        className="flex flex-row items-center justify-between p-3 border-b"
        style={{ borderColor: "lightgrey", height: responsiveHeight(6) }}
      >
        <View className="flex flex-row items-center">
          <Ionicons
            name="chevron-back"
            size={24}
            color="red"
            onPress={() => nav.goBack()}
          /><Text className='text-2xl'>{ title }</Text>
        </View>
        <AntDesign name="search1" size={24} color="red" />
      </View>

      <View
        style={{
          height: responsiveHeight(10),
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal
          data={dates}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="justify-evenly px-5 items-center "
              onPress={() =>{ 
                setDateSelected(index)
                setDate(item)
              }}
              style={{
                backgroundColor: dateSelected == index ? "red" : null,
              }}
            >
              <Text
                className={`${
                  dateSelected === index ? "text-white" : "text-red"
                }`}
              >
                {item.day}
              </Text>
              <Text
                className={`${
                  dateSelected === index ? "text-white" : "text-black"
                } font-bold text-lg`}
              >
                {item.dat}
              </Text>
              <Text
                className={`${
                  dateSelected === index ? "text-white" : "text-black"
                }`}
              >
                {item.mon}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        style={{ marginHorizontal: 10 }}
        data={Theaters}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: responsiveHeight(21),
              marginBottom: 10,
              borderRadius: 12,
              borderColor: "#E3E3E3",
              borderWidth: 2,
              marginTop: 10,
            }}
          >
            <View className="flex flex-row items-center gap-2 p-3">
              <TouchableOpacity>
                <MaterialIcons name="favorite-border" size={24} color="black" />
              </TouchableOpacity>
              <Text className="text-lg">{item.name}</Text>
            </View>
            <View className="flex flex-row flex-wrap gap-3 p-3">
              {item.timings.map((value, index) => (
                <TouchableOpacity key={index}
                  onPress={()=> {
                    nav.navigate('Theaters',{
                      title,
                      theater : item.name,
                      date,
                      time:value
                    })
                  }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderColor: "#cbd5e1",
                      color: "green",
                    }}
                    className="p-3"
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShowDetails;
