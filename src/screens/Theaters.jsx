import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Seats } from "../utils/Data";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { TheaterSeats } from "../components/Context/Wrapper";

const Theaters = ({ route }) => {
  const { title, theater, time, date,img } = route.params;
  const [selectSeat, setSelectSeat] = useState();

  const { seatsArray, setSeatsArray } = useContext(TheaterSeats);
  const nav = useNavigation();

  let amount = 0;

  seatsArray.length > 0 ? (amount = 100 * seatsArray.length) : amount;
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
          <Text className="text-2xl">{title}</Text>
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            marginTop: 50,
            justifyContent: "center",
            fontSize: 16,
            padding: 5,
            margin: "auto",
            color: "grey",
          }}
        >
          {theater} | {date.dat}th {date.mon} | {time}
        </Text>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) =>
            seatsArray.includes(item) ? (
              <TouchableOpacity
                onPress={() =>
                  setSeatsArray(seatsArray.filter((seat) => seat != item))
                }
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "green",
                  borderColor: "green",
                  borderWidth: 1,
                  margin: "3%",
                  alignItems: "center",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Text className="text-white text-center">{item}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSelectSeat(index);
                  setSeatsArray([...seatsArray, item]);
                }}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "white",
                  borderColor: "green",
                  borderWidth: 1,
                  margin: "3%",
                  alignItems: "center",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Text className="text-green text-center">{item}</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>

      <View style={{ flex: 0.8, justifyContent: "flex-end", padding: 50 }}>
        {seatsArray.length > 0 ? (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Ticket", {
                img,
                title,
                theater,
                time,
                date,
              });
            }}
            style={{
              backgroundColor: "red",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
              color: "white",
            }}
          >
            <Text style={{ color: "white", fontWeight: "900", fontSize: 16 }}>
              Pay Now
            </Text>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 16 }}>
              {" "}
              ₹ {amount}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Theaters;
