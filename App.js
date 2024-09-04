import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("./assets/sadboy.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.text}>John Irish Samar</Text>
        <Text style={styles.text}>Computer Engineer</Text>
      </View>

      <ScrollView style={styles.innerContainer2}>
        <View style={styles.container3}>
          <Text
            style={{ textAlign: "center", fontSize: 32, fontWeight: "bold" }}
          >
            Computer Engineer
          </Text>
          <Text style={{ textAlign: "center" }}>
            {" "}
            I’ve become a Computer Engineer wherein I specialize in software and
            hardware systems. Also, I honed my skills in Web Development to
            develop websites for freelancing and in developing future projects.
          </Text>
          <Text style={{ marginBottom: 10 }}>Age: 22</Text>
          <Text style={{ marginBottom: 10 }}>Birthday: November 22, 2001</Text>
          <Text style={{ marginBottom: 10 }}>
            Degree: Graduated BS Computer Engineering
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Email: samar.johnirishccpe1996@gmail.com
          </Text>
          <Text style={{ marginBottom: 10 }}>City: Iloilo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer2: {
    backgroundColor: "pink",
    flex: 2,
    width: "100%",
    height: "70%",
  },

  innerContainer: {
    backgroundColor: "#0384fc",
    width: "100%",
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 16, // Optional: Add some padding for better visual spacing
  },
  text: {
    color: "#fff", // Ensure text color contrasts with background
    fontSize: 18,
  },
  container3: {
    height: "500",
    width: "200",
    backgroundColor: "white",
  },
});
