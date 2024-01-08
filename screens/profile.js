import { View, Text, Image } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View className= "bg-[#F5F5F5] pt-[47] " >
      <View className="flex-row justify-between items-center pl-[24] pr-[24]">
        <View className="w-[52] h-[52] bg-white flex-row justify-center items-center rounded-full">
            <Image source={require("../assets/images/icons/back-arro.png")} />
          </View>
        <View className="w-[52] h-[52] bg-white flex-row justify-center items-center rounded-full">
            <Image source={require("../assets/images/icons/settings.png")} />
          </View>

      </View>
      <View className=" justify-center items-center mt-[50]">
        <Image className="w-[178] h-[178] rounded-full" source={require("../assets/images/picture/tura.png")}/>
        <Text classname="mt-[21] font-bold" style={{fontSize:20}}>Tura Sarkar</Text>
        <Text className="mt-[5] font-normal text-[#999]" style={{fontSize:15}}>01921045370</Text>
        <Text className="mt-[5] font-normal" style={{fontSize:20}}>Demra,Dhaka</Text>
      </View>
      <View className="mt-[50] flex-row justify-around items-center">
        <View className="w-[120] h-[120] bg-[#FE5C07] rounded-md justify-center items-center">
          <Text className="text-white"style={{fontSize:24}}>5</Text>
          <Text className="text-white"style={{fontSize:12}}>Favourite</Text>
        </View>
        <View className="w-[120] h-[120] bg-[#FE5C07] rounded-md justify-center items-center">
          <Text className="text-white"style={{fontSize:24}}>67</Text>
          <Text className="text-white"style={{fontSize:12}}>Points</Text>
        </View>
      </View>
      <View className="mt-[65] ml-auto mr-auto p-4 bg-white h-[104] w-[311] rounded-md">
        <Text className="font-bold">Services</Text>
        <View className="flex-row justify-between items-center">
          <View className="items-center w-[50]">
            <Image className="h-[24] w-[24]"source={require("../assets/images/icons/messages.png")}/>
            <Text  className="font-bold text-center" style={{fontSize:10}}>My Messages</Text>
          </View>
          <View className="items-center w-[50]">
            <Image className="h-[24] w-[24]"source={require("../assets/images/icons/help.png")}/>
            <Text  className="font-bold text-center" style={{fontSize:10}}>Help Centre</Text>
          </View>
          <View className="items-center w-[50]">
            <Image className="h-[24] w-[24]"source={require("../assets/images/icons/myreviews.png")}/>
            <Text  className="font-bold text-center" style={{fontSize:10}}>My Reviews</Text>
          </View>
          <View className="items-center w-[50]">
            <Image className="h-[24] w-[24]"source={require("../assets/images/icons/phone.png")}/>
            <Text  className="font-bold text-center" style={{fontSize:10}}>Contact Us</Text>
          </View>
        </View>
      </View>
      <Text></Text>
    </View>
  );
};

export default ProfileScreen;
