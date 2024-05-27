import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { nowShowingMovies } from "../utils/Data";
import { Store, TheaterSeats } from "../components/Context/Wrapper";

const Ticket = ({ route }) => {
  const { data } = useContext(Store);
  const { seatsArray ,setSeatsArray} = useContext(TheaterSeats);
  const { title, img, date, theater, time } = route.params;
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
          />
          <Text className="text-2xl">My Bookings</Text>
        </View>
      </View>

      <View
        className="flex flex-row"
        style={{
          borderColor: "grey",
          borderWidth: 1,
          padding: 5,
          margin: 10,
          borderRadius: 2,
        }}
      >
        <Image
          source={{ uri: img }}
          resizeMode="cover"
          style={{ height: 180, width: 150 }}
        />
        <View className="flex flex-col flex-wrap ml-3 ">
          <Text className="font-bold text-2xl">{title}</Text>
          <Text style={{ fontSize: 16 }}>
            {theater} | {data}
          </Text>
          <Text style={{ fontSize: 16 }}>
            {date.dat} {date.mon} | {time}
          </Text>
          <Text style={{ fontSize: 16 }}>Screen : AUDI 3</Text>
          <Text className="font-bold " style={{ fontSize: 16 }}>
            Seats : {seatsArray.join(" , ")}
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 , flex:1, justifyContent:'flex-end'}}>
        <TouchableOpacity
          className="items-center justify-center"
          style={{ backgroundColor: "red", height: 40,borderRadius:10 }}
        >
          <Text className=' text-2xl text-white' onPress={()=> {
            nav.navigate('Movies')
            setSeatsArray([])
          }}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Ticket;
