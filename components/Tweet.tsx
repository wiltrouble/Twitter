import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.avatar} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
