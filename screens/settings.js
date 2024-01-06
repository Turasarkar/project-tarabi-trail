import { View, Text,Image, ScrollView } from "react-native";
import React from "react";

const SettingsScreen = () => {
  return (
    <ScrollView horizontal={false}>
    <View className= "bg-[#F5F5F5] pt-[47] " >
      <View className="flex-row justify-between items-center pl-[24] pr-[24]">
        <Image className="bg-white h-[12] w-[12] p-[26] flex-row justify-center items-center rounded-full"  height={12}source={require("../assets/images/icons/back-arro.png")}/>
        <Text className="font-extrabold" style={{fontSize:26}}>Settings</Text>
        <Image className="bg-white h-[12] w-[12] p-[26] flex-row justify-center items-center rounded-full"  height={12}source={require("../assets/images/icons/moon-arro.png")}/>
      </View>
      
      <View className="flex-row justify-between items-center bg-white mt-[27] pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Account Settings</Text>
        <Image source ={require("../assets/images/icons/right-arro.png")}/>
      </View>
      <View className="flex-row justify-between items-center bg-white pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Country</Text>
        <View className="flex-row justify-end items-center gap-2">
          <Text className="font-bold text-[#999999]"style={{fontSize:16}}>Bangladesh</Text>
          <Image source ={require("../assets/images/icons/right-arro.png")}/>
        </View>
        
      </View>
      <View className="flex-row justify-between items-center bg-white pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Currency</Text>
        <View className="flex-row justify-end items-center gap-2">
          <Text className="font-bold text-[#999999]"style={{fontSize:16}}>BDT</Text>
          <Image source ={require("../assets/images/icons/right-arro.png")}/>
        </View>
        
      </View>
      <View className="flex-row justify-between items-center bg-white pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Language</Text>
        <View className="flex-row justify-end items-center gap-2">
          <Text className="font-bold text-[#999999]"style={{fontSize:16}}>English</Text>
          <Image source ={require("../assets/images/icons/right-arro.png")}/>
        </View>
        
      </View>
      <View className="flex-row justify-between items-center bg-white mt-[27] pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Notification Settings</Text>
        <Image source ={require("../assets/images/icons/right-arro.png")}/>
      </View>
      <View className="flex-row justify-between items-center bg-white  pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>About Us</Text>
        <Image source ={require("../assets/images/icons/right-arro.png")}/>
      </View>
      <View className="flex-row justify-between items-center bg-white  pt-[16] pb-[16] pl-[24] pr-[24]">
        <Text className="font-bold"style={{fontSize:16}}>Privacy Policy </Text>
        <Image source ={require("../assets/images/icons/right-arro.png")}/>
      </View>
      <View className="mr-[24] ml-[24] mt-[50] rounded-full bg-[#FF660E] flex-1 pt-[15] pb-[15]">
        <Text className="text-white font-bold text-center">Log Out</Text>
      </View>
    </View>
    </ScrollView>

  );
};

export default SettingsScreen;
