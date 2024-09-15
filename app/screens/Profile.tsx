import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Colors from "../utils/color";
import ContactThumbnail from "../shared/components/ContactThumbnail";
import DetailListItem from "./DetailListItem";
import { useEffect, useState } from "react";
import { fetchRandomContact } from "../utils/api";

export default function Profile() {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await fetchRandomContact();
        setContact(data); // Cập nhật danh sách liên hệ
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const { avatar, name, email, phone, cell }: any = contact;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail
          avatar={avatar}
          name={name}
          phone={phone}
        ></ContactThumbnail>
      </View>
      <View style={styles.detailSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email}/>
        <DetailListItem icon="phone" title="Work" subtitle={phone}/>
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
  },
  detailSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
