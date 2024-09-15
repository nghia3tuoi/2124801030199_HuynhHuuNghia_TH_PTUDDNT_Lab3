import { View, StyleSheet} from "react-native";
import DetailListItem from "../../screens/DetailListItem";

export default function Options() {
 return (
    <View style={style.container}>
        <DetailListItem title="Update Profile"/>
        <DetailListItem title="ChangeLanguage"/>
        <DetailListItem title="Sign out"/>
    </View>
 )
}
const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    }
}) 