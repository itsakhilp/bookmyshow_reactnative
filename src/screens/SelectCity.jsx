import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SelectCity = () => {

  const nav = useNavigation();

  const cities = [
    "Mumbai",
    "Hyderabad",
    "Goa",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Vizag",
    "Jaipur",
    "Pune",
    "Mysore",
  ];

  const [selectedCity, setSelectedCity] = useState();
  const [isClicked, setIsClicked] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text
        style={{
          fontSize: 22,
          fontStyle: "bold",
          justifyContent: "center",
          display: "flex",
        }}
      >
        SELECT YOUR CITY
      </Text>

      <View>
        <FlatList
          style={{ marginTop: 30 }}
          numColumns={4}
          data={cities}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedCity(index);
                setIsClicked(false);
              }}
              style={{
                borderColor: selectedCity == index ? "red" : "grey",
                borderWidth: selectedCity == index ? 2.3 : 0.8,
                paddingVertical: 9,
                paddingHorizontal: 15,
                width: "auto",
                marginLeft: 10,
                marginBottom: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: selectedCity == index ? "red" : "black" }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ padding: 20, justifyContent: "flex-end", flex: 0.9 }}>
        <TouchableOpacity
          disabled={isClicked}
          onPress={() =>{ 
            AsyncStorage.setItem('city','saved')
            nav.navigate("Movies")}
        }
          style={{
            height: 45,
            marginHorizontal: 50,
            backgroundColor: isClicked ? "lightgrey" : "red",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCity;
