import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { fetchContacts } from "../utils/api";
import ContactThumbnail from "../shared/components/ContactThumbnail";
import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsLoading, fetchContactsSuccess, fetchContactFailed } from "../store/CreateStore";

export default function Favorite({ navigation }: any) {
  //state
  const selectContacts: any = useSelector((state: any) => state.contacts);
  const selectLoading: any = useSelector((state: any) => state.loading);
  const selectError: any = useSelector((state: any) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts:any) => {
      
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((e:any) => {
        dispatch(fetchContactFailed());
      });
  }, []);

  const renderFavoriteThumbnail = ({ item }: any) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => {
          navigation.navigate("Profile", { contact: item });
        }}
      />
    );
  };
  const favorites = selectContacts.filter((contact: any) => contact.favorite);
  return (
    <View style={style.container}>
      {selectLoading && <ActivityIndicator size="large" />}
      {selectError && <Text>Error...</Text>}
      {!selectLoading && !selectError && (
        <FlatList
          data={favorites}
          keyExtractor={(item: any) => {
            return item.id;
          }}
          numColumns={3}
          contentContainerStyle={style.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
});
