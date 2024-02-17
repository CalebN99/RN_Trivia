import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../css/HomeStyles";

export default function Home() {
  const [category, setCategory] = useState("science");

  let categories: { [key: string]: string } = {
    science: "Science",
    history: "History",
    pop_culture: "Pop Culture",
  };
  const renderPickerItems = () => {
    return Object.entries(categories).map(([key, value]) => (
      <Picker.Item key={key} label={value} value={key} />
    ));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Trivia</Text>
      </View>
      <View>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          style={styles.picker}
        >
          {renderPickerItems()}
        </Picker>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
