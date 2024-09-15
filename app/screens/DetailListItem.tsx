import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../utils/color";

export default function DetailListItem({ icon, title, subtitle }: any) {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              style={{ color: Colors.black, marginRight: 20 }}
            />
          )}
          <View style={styles.contentContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: { flex: 1, flexDirection: "row", alignItems: "center",},
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: Colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});
