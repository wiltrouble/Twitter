import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

const NewTweet = () => {
  const [text, setText] = useState("");
  const router = useRouter()

  const onTweetPress = () => {
    console.log("Postin the tweet");
    router.back();
    setText('')
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../c" style={{ fontSize: 20 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.avatar} />
          <TextInput
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1c9bf0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});
