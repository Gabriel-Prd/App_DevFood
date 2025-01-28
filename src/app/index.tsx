import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants'

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Input } from "../components/input";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { CardrestaurantsVertical } from "../components/restaurantesVertical";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style = {{flex: 1}} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full mt-3 px-4" >
        <Header/>

        <Banner/>

        <Input/>

        
      </View>

      <Section 
      name="Comidas em Alta"
      label="Veja mais"
      action={() => console.log("Clicou veja mais") }
      size="text-2xl"
      />

      <TrendingFoods/>

      <Section 
      name="Famosos no DevFood"
      label="Veja todos"
      action={() => console.log("Clicou veja todos") }
      size="text-xl"
      />

      <Restaurants/>

      <Section 
      name="Restaurantes"
      label="Veja todos"
      action={() => console.log("Clicou veja todos") }
      size="text-xl"
      />

      <CardrestaurantsVertical/>
      

    </ScrollView>
  );
}
