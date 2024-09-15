import { ActivityIndicator, Button, FlatList, View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import ContactListItem from "../shared/components/ContactListItem";
import { useEffect, useState } from "react";
import { fetchContacts } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContactFailed,
  fetchContactsLoading,
  fetchContactsSuccess,
} from "../store/CreateStore";
export default function Contacts({ navigation }: any) {
  //state
  // const [contacts, setContacts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const selectContacts: any = useSelector((state: any) => state.contacts);
  const selectLoading: any = useSelector((state: any) => state.loading);
  const selectError: any = useSelector((state: any) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts: any) => {
        console.log(contacts);
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((e: any) => {
        dispatch(fetchContactFailed());
      });
  }, []);
  //sort
  const contactSorted = selectContacts.slice().sort((a: any, b: any) => {
    return a.name.localeCompare(b.name);
  });
  const renderContact = ({ item }: any) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        phone={phone}
        avatar={avatar}
        onPress={() => {
          navigation.navigate("Profile", { contact: item });
        }}
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
      {selectLoading && <ActivityIndicator color={"blue"} size="large" />}
      {selectError && <Text>Error...</Text>}
      {!selectLoading && !selectError && (
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
