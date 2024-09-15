import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

export default function ContactThumbnail({
  name,
  phone,
  avatar,
  textColor,
  onPress,
}: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
      </TouchableOpacity>
      {name != "" && (
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
      )}
      {phone != "" && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <Text style={[styles.phone, { color: textColor }]}>{phone}</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: "bold",
  },
  phoneSection: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
});
