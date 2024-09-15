import { ActivityIndicator, Button, FlatList, View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import ContactListItem from "../shared/components/ContactListItem";
import { useEffect, useState } from "react";
import { fetchContacts } from "../utils/api";
export default function Contacts({navigation}:any) {
  //state
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Đánh dấu bắt đầu tải dữ liệu
      try {
        const data: any = await fetchContacts(); // Gọi hàm và lấy dữ liệu
        setContacts(data); // Cập nhật danh sách liên hệ
       
      } catch (error) {
        console.log(error)
        setError(false); // Đặt lỗi nếu có
      } finally {
        setLoading(false); // Kết thúc trạng thái tải
      }
    };
    fetchData(); // Gọi hàm bất đồng bộ để tải dữ liệu
  }, []);
  //sort
  const contactSorted = contacts.sort((a: any, b: any) => {
    return a.name.localeCompare(b.name);
  });
  const renderContact = ({ item }: any) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        phone={phone}
        avatar={avatar}
        onPress={() => {navigation.navigate('Profile', {contact: item})}}
      />
    );
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {loading && <ActivityIndicator color={"blue"} size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactSorted}
          renderItem={renderContact}
          keyExtractor={(item: any) => {
            return item.id;
          }}
        />
      )}
    </View>
  );
}
