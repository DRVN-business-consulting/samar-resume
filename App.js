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
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            {" "}
            I’ve become a Computer Engineer wherein I specialize in software and
            hardware systems. Also, I honed my skills in Web Development to
            develop websites for freelancing and in developing future projects.
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>Age: 22</Text>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>
            Birthday: November 22, 2001
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>
            Degree: Graduated BS Computer Engineering
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>
            Email: samar.johnirishccpe1996@gmail.com
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>City: Iloilo</Text>
        </View>

        <View style={styles.container3}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Education
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 14,
              marginBottom: 5,
            }}
          >
            {" "}
            Primary Education
          </Text>
          <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 12 }}>
            San Antonio Elementary School (2008 - 2014)
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: 10,
              fontSize: 10,
            }}
          >
            San Antonio Elementary School
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 14,
              marginBottom: 5,
            }}
          >
            Secondary Education
          </Text>
          <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 12 }}>
            Junior High School Special Science Class(2014 - 2018)
          </Text>
          <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 12 }}>
            Senior High School STEM(2018 - 2020)
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: 10,
              fontSize: 10,
            }}
          >
            Leonora S. Salapantan NHS
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 14,
              marginBottom: 5,
            }}
          >
            Tertiary Education
          </Text>
          <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 12 }}>
            BS in Computer Engineering(2020-2024)
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: 10,
              fontSize: 10,
            }}
          >
            Western Institute of Technology
          </Text>
        </View>

        <View style={styles.container3}>
          <Text
            style={{ textAlign: "center", fontSize: 32, fontWeight: "bold" }}
          >
            Work Experience
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 5 }}>
            Intern in IT Department(2023)
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontStyle: "italic",
              marginBottom: 15,
              fontSize: 12,
            }}
          >
            Healthway Qualimed Hospital, Iloilo
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 5 }}>
            Intern in Management Information System (2023)
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontStyle: "italic",
              marginBottom: 15,
              fontSize: 12,
            }}
          >
            Healthway Qualimed Hospital, Iloilo
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 12 }}>©John Irish Samar</Text>
          <Text style={{ fontStyle: "italic", fontSize: 10 }}>
            "Comparison is the thief of joy"
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0384fc",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer2: {
    backgroundColor: "#ad0541",
    flex: 1,
    width: "100%",
    height: "75%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerContainer: {
    backgroundColor: "#0384fc",
    width: "100%",
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 16,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  container3: {
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#330113",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    width: "95%",
    backgroundColor: "white",
    alignSelf: "center", // Center horizontally
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f75c",
    marginTop: 20,
  },
});
