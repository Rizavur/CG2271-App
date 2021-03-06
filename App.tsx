import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

export default function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [responseText, setResponseText] = useState("");

  const fetchData = async (input: string) => {
    if (ipAddress) {
      try {
        const response = await fetch("http://" + ipAddress + "/" + input, {
          method: "GET",
        });
        const htmlResponse = await response.text();
        setResponseText(htmlResponse);
      } catch (e) {
        setResponseText("There was an error");
      }
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="auto" />
      <TextInput
        placeholder="IP ADDRESS"
        value={ipAddress}
        style={{ minWidth: 100 }}
        onChangeText={(text) => setIpAddress(text)}
      />
      <Button
        style={{ ...styles.button, paddingBottom: 20 }}
        onPress={() => fetchData("status")}
      >
        Check Wi-Fi Status
      </Button>
      <View style={styles.buttonView}>
        <Button disabled style={styles.button}>
          {" "}
        </Button>
        <TouchableOpacity
          onPressIn={() => fetchData("smallLeft")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton
            style={styles.smallButton}
            size={40}
            icon="arrow-top-left"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => fetchData("forward")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton style={styles.button} size={60} icon="arrow-up" />
        </TouchableOpacity>
        <Button disabled style={styles.button}>
          {" "}
        </Button>
        <TouchableOpacity
          onPressIn={() => fetchData("smallRight")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton
            style={styles.smallButton}
            size={40}
            icon="arrow-top-right"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPressIn={() => fetchData("left")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton style={styles.button} size={60} icon="arrow-left" />
        </TouchableOpacity>
        <Button disabled style={styles.button}>
          {" "}
        </Button>
        <TouchableOpacity
          onPressIn={() => fetchData("right")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton style={styles.button} size={60} icon="arrow-right" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <Button disabled style={styles.button}>
          {" "}
        </Button>
        {/* <TouchableOpacity
          onPressIn={() => fetchData("reverseLeft")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton
            style={styles.smallButton}
            size={40}
            icon="arrow-bottom-left"
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPressIn={() => fetchData("reverse")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton style={styles.button} size={60} icon="arrow-down" />
        </TouchableOpacity>
        <Button disabled style={styles.button}>
          {" "}
        </Button>
        {/* <TouchableOpacity
          onPressIn={() => fetchData("reverseRight")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton
            style={styles.smallButton}
            size={40}
            icon="arrow-bottom-right"
          />
        </TouchableOpacity> */}
      </View>
      <Text style={styles.text}>Response:</Text>
      <Text style={styles.text}>{responseText}</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          style={{ ...styles.smallButton }}
          size={40}
          icon="power"
          onPress={() => fetchData("autoOn")}
        />
        <TouchableOpacity
          onPressIn={() => fetchData("smallForward")}
          onPressOut={() => {
            fetchData("stop");
          }}
        >
          <IconButton
            style={{ ...styles.smallButton, marginRight: 30 }}
            size={40}
            icon="arrow-up"
          />
        </TouchableOpacity>

        <IconButton
          style={{ ...styles.smallButton }}
          size={40}
          icon="music"
          onPress={() => fetchData("playMusic")}
        />
        <IconButton
          style={{ ...styles.smallButton }}
          size={40}
          icon="music-off"
          onPress={() => fetchData("offMusic")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // marginHorizontal: 10,
    marginVertical: 0,
  },
  smallButton: {
    margin: 0,
  },
  text: {
    margin: 10,
  },
});
