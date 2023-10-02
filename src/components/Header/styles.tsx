import { StyleSheet } from "react-native";
import theme from "@Theme";


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.orange,
        alignItems: "center",
        marginBottom: 24,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 12,
        justifyContent: "space-between",
        height: 70,
    },
    textStyle: {
        color: theme.colors.white,
    },
    favoriteContainer: {
        position: "absolute",
        width: "100%",
        alignItems: "flex-end"
    },
    titleContainer: {
        alignItems: "center",
        position: "absolute",
        width: "100%",
    },
    leftIconStyle: {
        tintColor: theme.colors.white
    }
})

export default styles