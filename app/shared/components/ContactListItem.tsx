import React from "react";
import {
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
} from "react-native";
import Colors from "../../utils/color";
export default function ContactListItem({ name, avatar, phone, onPress }: any) {
  return (
    <TouchableHighlight
      underlayColor={Colors.grey}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.contactInfo}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View style={styles.details}>
          <Text style={styles.title}>{name.trim()}</Text>
          <Text style={styles.subTitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  contactInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 26,
    paddingRight: 24,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  details: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
  },
  title: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    color: Colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});
