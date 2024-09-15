import { StyleSheet, View, Text } from "react-native";
import Colors from "../utils/color";
import { useEffect, useState } from "react";
import { fetchUserContact } from "../utils/api";
import { ActivityIndicator } from "react-native-paper";
import ContactListItem from "../shared/components/ContactListItem";
import ContactThumbnail from "../shared/components/ContactThumbnail";

export default function User() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserContact();
        setUser(user);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  const { avatar, name, phone }: any = user;
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Erorr...</Text>}
      {!loading && !error && (
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
  },
});
